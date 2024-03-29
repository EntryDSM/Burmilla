import React, { FC } from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";
import { details_arrow } from "../../../../../assets/applicants";
import { Checkbox, Button } from "../../../../common";
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
  updateApplicantStatus,
  updateApplicantSubmitStatus,
  setIsContainerWidth,
}) => {
  const history = useHistory();

  const handleClickDetailArrow = () => {
    setIsContainerWidth(!isContainerWidth);
  };

  const handleClickNotArrived = async (
    receipt_code: number,
    is_printed_arrived: boolean
  ) => {
    if (window.confirm("지원자의 원서 도착 여부를 수정하시겠습니까?")) {
      await updateApplicantStatus({ receipt_code, is_printed_arrived });
    }
    if (updateApplicantStatus) {
      setTimeout(() => history.go(0), 300);
    }
  };

  const handleClickCancelSubmitted = async (receipt_code: number) => {
    if (window.confirm("지원자의 최종 제출 상태를 수정하시겠습니까?")) {
      await updateApplicantSubmitStatus({ receipt_code });
    }
    if (updateApplicantSubmitStatus) {
      setTimeout(() => history.go(0), 300);
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
        <p>원서 도착 확인</p>
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
