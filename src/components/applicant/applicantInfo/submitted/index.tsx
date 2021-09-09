import React, { FC } from "react";
import * as S from "./style";
import ApplicantStatusContainer from "./applicantStatus";
import BasicInfo from "./basicInfo";
import DetailInfo from "./detailInfo";
import Documents from "./documents";
import {
  ApplicantListItem,
  ApplicantPersonalData,
  ApplicantEvaluation,
  ApplicantStatus,
  UpdateApplicantStatusPayload,
  UpdateApplicantSubmitStatusPayload,
  GetApplicantInfoPayload,
} from "../../../../data/api/apiTypes";
import { returnEducationalType } from "../../../../utils/checkType";

interface Props {
  isContainerWidth: boolean;
  applicantPersonalData: ApplicantPersonalData;
  applicantEvaluation: ApplicantEvaluation;
  applicantStatus: ApplicantStatus;
  applicantListItem: ApplicantListItem;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => void;
  updateApplicantSubmitStatus: (
    payload: UpdateApplicantSubmitStatusPayload
  ) => void;
  setIsContainerWidth: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  // resetUpdateStatus;
}

const Submitted: FC<Props> = ({
  isContainerWidth,
  applicantPersonalData,
  applicantEvaluation,
  applicantStatus,
  applicantListItem,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  updateApplicantSubmitStatus,
  setIsContainerWidth,
  getApplicantInfo,
  // resetUpdateStatus,
}) => {
  const checkGradeType = React.useCallback(() => {
    return (
      returnEducationalType(applicantPersonalData.educational_status) ===
      "검정고시"
    );
  }, [applicantPersonalData.application_type]);

  return (
    <S.Wrapper>
      <ApplicantStatusContainer
        isContainerWidth={isContainerWidth}
        is_printed_arrived={applicantStatus.is_printed_arrived}
        receipt_code={applicantListItem.receipt_code}
        updateApplicantStatusStatus={updateApplicantStatusStatus}
        updateApplicantStatus={updateApplicantStatus}
        updateApplicantSubmitStatus={updateApplicantSubmitStatus}
        setIsContainerWidth={setIsContainerWidth}
        getApplicantInfo={getApplicantInfo}
        // resetUpdateStatus={resetUpdateStatus}
      />
      <BasicInfo applicantPersonalData={applicantPersonalData} />
      <DetailInfo
        isQUALIFICATION_EXAM={checkGradeType()}
        applicantPersonalData={applicantPersonalData}
        applicantEvaluation={applicantEvaluation}
      />
      <Documents applicantEvaluation={applicantEvaluation} />
    </S.Wrapper>
  );
};

export default Submitted;
