import React, { FC } from "react";
import * as S from "./style";
import { details_arrow } from "../../../../../assets/applicants";
import { Checkbox, Button } from "../../../../common";
import { downloadExcel } from "../../../../../utils/download";
import { downloadAdmissionExcel } from "../../../../../data/api/index";
import {
  GetApplicantInfoPayload,
  UpdateApplicantStatusPayload,
  UpdateApplicantSubmitStatusPayload,
} from "../../../../../data/api/apiTypes";

interface Props {
  isContainerWidth: boolean;
  is_printed_arrived: boolean;
  receipt_code: number;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => void;
  updateApplicantSubmitStatus: (
    payload: UpdateApplicantSubmitStatusPayload
  ) => void;
  setIsContainerWidth: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const ApplicantStatuses: FC<Props> = ({
  isContainerWidth,
  is_printed_arrived,
  receipt_code,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  updateApplicantSubmitStatus,
  setIsContainerWidth,
  getApplicantInfo,
}) => {
  const handleClickDetailArrow = () => {
    setIsContainerWidth(!isContainerWidth);
  };

  const handleClickNotArrived = async (
    receipt_code: number,
    is_printed_arrived: boolean
  ) => {
    if (window.confirm("지원자의 원서 제출 상태를 수정하시겠습니까?")) {
      await updateApplicantStatus({ receipt_code, is_printed_arrived });
    }
  };

  const handleClickCancelSubmitted = async (receipt_code: number) => {
    if (window.confirm("지원자의 최종 제출 상태를 수정하시겠습니까?")) {
      await updateApplicantSubmitStatus({ receipt_code });
    }
  };

  return (
    <S.Wrapper>
      <S.DetailInfo
        src={details_arrow}
        onClick={() => handleClickDetailArrow()}
      />
      <S.CheckboxContainer
        onClick={() => handleClickNotArrived(receipt_code, !is_printed_arrived)}
      >
        <Checkbox isChecked={is_printed_arrived} />
        <p>원서 미도착</p>
      </S.CheckboxContainer>
      <S.ButtonContainer>
        <Button
          className="applicant-info__cancel-btn"
          onClick={() => handleClickCancelSubmitted(receipt_code)}
        >
          최종제출 취소
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default ApplicantStatuses;
