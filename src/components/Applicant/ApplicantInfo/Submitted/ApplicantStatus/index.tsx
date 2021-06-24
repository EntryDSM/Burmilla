import * as React from "react";

import * as S from "./style";
import { Checkbox, Button } from "../../../../Common";
import { ApplicantStatus } from "../../../../../data/api/apiTypes";
import { useApplicant } from "../../../../../hooks/applicant";
import checkApiStatus from "../../../../../data/api/checkApiStatus";

interface Props {
  applicantStatus: ApplicantStatus;
  email: string;
}

const ApplicantStatuses = ({ applicantStatus, email }: Props) => {
  const {
    applicantStore: { updateApplicantStatusStatus },
    updateApplicantStatus,
    updateApplicantList,
    getApplicantInfo,
    resetUpdateStatus,
  } = useApplicant();

  const [changedStatus, setChangedStatus] = React.useState<string>("");

  React.useEffect(() => {
    if (checkApiStatus(updateApplicantStatusStatus)._204) {
      updateApplicantList({
        email,
        ...applicantStatus,
        [changedStatus]: !applicantStatus[changedStatus],
      });

      if (changedStatus === "is_final_submit") {
        getApplicantInfo({ email });
      }
    } else if (checkApiStatus(updateApplicantStatusStatus)._400) {
      window.alert("지원자 정보 수정 권한이 없습니다.");
    }

    resetUpdateStatus();
  }, [updateApplicantStatusStatus]);

  const handleClickCheckbox = async (email: string, status: string) => {
    if (window.confirm("지원자의 상태를 수정하시겠습니까?")) {
      setChangedStatus(status);
      updateApplicantStatus({ email, [status]: !applicantStatus[status] });
    }
  };

  return (
    <S.Wrapper>
      <S.CheckboxContainer
        onClick={() => handleClickCheckbox(email, "is_arrived")}
      >
        <Checkbox isChecked={applicantStatus.is_arrived} />
        <p>원서 도착 여부</p>
      </S.CheckboxContainer>
      <S.CheckboxContainer
        onClick={() => handleClickCheckbox(email, "is_paid")}
      >
        <Checkbox isChecked={applicantStatus.is_paid} />
        <p>납부 여부</p>
      </S.CheckboxContainer>
      <Button
        className="applicant-info__cancel-btn"
        onClick={() => handleClickCheckbox(email, "is_final_submit")}
      >
        최종제출 취소
      </Button>
    </S.Wrapper>
  );
};

export default ApplicantStatuses;
