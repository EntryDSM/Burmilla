import React, { FC } from "react";
import * as S from "./style";
import { details_arrow } from "../../../../../assets/applicants";
import { Checkbox, Button } from "../../../../common";
import checkApiStatus from "../../../../../data/api/checkApiStatus";
import {
  UpdateApplicantStatusPayload,
  GetApplicantInfoPayload,
} from "../../../../../data/api/apiTypes";

interface Props {
  applicantInfoAppear: boolean;
  printed_arrived: boolean;
  receipt_code: number;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: UpdateApplicantStatusPayload;
  setApplicantInfoAppear: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  // resetUpdateStatus;
}

const ApplicantStatuses: FC<Props> = ({
  applicantInfoAppear,
  printed_arrived,
  receipt_code,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  setApplicantInfoAppear,
  getApplicantInfo,
  // resetUpdateStatus,
}) => {
  const [changedStatus, setChangedStatus] = React.useState<string>("");

  React.useEffect(() => {
    if (checkApiStatus(updateApplicantStatusStatus)._204) {
      // updateApplicantList({
      //   printed_arrived,
      // });

      if (changedStatus === "submit") {
        getApplicantInfo({ receipt_code });
      }
    } else if (checkApiStatus(updateApplicantStatusStatus)._400) {
      window.alert("지원자 정보 수정 권한이 없습니다.");
    }

    // resetUpdateStatus();
  }, [updateApplicantStatusStatus]);

  const handleClickCheckbox = async (printed_arrived: boolean) => {
    if (window.confirm("지원자의 상태를 수정하시겠습니까?")) {
      // updateApplicantStatus({
      //   printed_arrived,
      // });
    }
  };

  const handleClickDetailArrow = () => {
    setApplicantInfoAppear(!applicantInfoAppear);
  };

  return (
    <S.Wrapper>
      <S.DetailInfo
        src={details_arrow}
        onClick={() => handleClickDetailArrow()}
      ></S.DetailInfo>
      <S.CheckboxContainer onClick={() => handleClickCheckbox(printed_arrived)}>
        <Checkbox isChecked={printed_arrived} />
        <p>원서 미도착</p>
      </S.CheckboxContainer>
      <Button
        className="applicant-info__cancel-btn"
        // onClick={() => handleClickCheckbox(email, "submit")}
      >
        최종제출 취소
      </Button>
    </S.Wrapper>
  );
};

export default ApplicantStatuses;
