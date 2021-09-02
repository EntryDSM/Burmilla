import React, { FC } from "react";
import * as S from "./style";
import { Checkbox, Button } from "../../../../common";
import checkApiStatus from "../../../../../data/api/checkApiStatus";
import {
  UpdateApplicantStatusPayload,
  GetApplicantInfoPayload,
} from "../../../../../data/api/apiTypes";

interface Props {
  is_printed_arrived: boolean;
  receipt_code: number;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: UpdateApplicantStatusPayload;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  // resetUpdateStatus;
}

const ApplicantStatuses: FC<Props> = ({
  is_printed_arrived,
  receipt_code,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  getApplicantInfo,
  // resetUpdateStatus,
}) => {
  const [changedStatus, setChangedStatus] = React.useState<string>("");

  React.useEffect(() => {
    if (checkApiStatus(updateApplicantStatusStatus)._204) {
      // updateApplicantList({
      //   is_printed_arrived,
      // });

      if (changedStatus === "is_submit") {
        getApplicantInfo({ receipt_code });
      }
    } else if (checkApiStatus(updateApplicantStatusStatus)._400) {
      window.alert("지원자 정보 수정 권한이 없습니다.");
    }

    // resetUpdateStatus();
  }, [updateApplicantStatusStatus]);

  const handleClickCheckbox = async (is_printed_arrived: boolean) => {
    if (window.confirm("지원자의 상태를 수정하시겠습니까?")) {
      // updateApplicantStatus({
      //   is_printed_arrived,
      // });
    }
  };

  return (
    <S.Wrapper>
      <S.CheckboxContainer
        onClick={() => handleClickCheckbox(is_printed_arrived)}
      >
        <Checkbox isChecked={is_printed_arrived} />
        <p>원서 미도착</p>
      </S.CheckboxContainer>
      <Button
        className="applicant-info__cancel-btn"
        // onClick={() => handleClickCheckbox(email, "is_submit")}
      >
        최종제출 취소
      </Button>
    </S.Wrapper>
  );
};

export default ApplicantStatuses;
