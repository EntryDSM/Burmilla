// import React, { FC } from "react";
// import * as S from "./style";
// import ApplicantStatusContainer from "./applicantStatus";
// import BasicInfo from "./basicInfo";
// import DetailInfo from "./detailInfo";
// import Documents from "./documents";
// import {
//   ApplicantListItem,
//   ApplicantPersonalData,
//   ApplicantEvaluation,
//   ApplicantStatus,
//   UpdateApplicantStatusPayload,
// } from "../../../../data/api/apiTypes";
// import { returnEducationalType } from "../../../../utils/checkType";

// interface Props {
//   applicantPersonalData: ApplicantPersonalData;
//   applicantEvaluation: ApplicantEvaluation;
//   applicantStatus: ApplicantStatus;
//   applicantListItem: ApplicantListItem;
//   updateApplicantStatusStatus: number;
//   updateApplicantStatus: UpdateApplicantStatusPayload;
//   // resetUpdateStatus;
// }

// const Submitted: FC<Props> = ({
//   applicantPersonalData,
//   applicantEvaluation,
//   applicantStatus,
//   applicantListItem,
//   updateApplicantStatusStatus,
//   updateApplicantStatus,
//   // resetUpdateStatus,
// }) => {
//   const checkGradeType = React.useCallback(() => {
//     return (
//       returnEducationalType(applicantPersonalData.educational_status) ===
//       "검정고시"
//     );
//   }, [applicantPersonalData.application_type]);

//   return (
//     <S.Wrapper>
//       <ApplicantStatusContainer
//         is_printed_arrived={applicantStatus.is_printed_arrived}
//         receipt_code={applicantListItem.receipt_code}
//         updateApplicantStatusStatus={updateApplicantStatusStatus}
//         updateApplicantStatus={updateApplicantStatus}
//         // resetUpdateStatus={resetUpdateStatus}
//       />
//       <BasicInfo applicantPersonalData={applicantPersonalData} />
//       <DetailInfo
//         isQUALIFICATION_EXAM={checkGradeType()}
//         applicantPersonalData={applicantPersonalData}
//         applicantEvaluation={applicantEvaluation}
//       />
//       <Documents applicantEvaluation={applicantEvaluation} />
//     </S.Wrapper>
//   );
// };

// export default Submitted;

export {};
