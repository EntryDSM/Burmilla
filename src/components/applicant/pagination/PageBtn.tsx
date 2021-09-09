// import React, { FC, useMemo, useEffect, useState } from "react";
// import * as S from "./style";
// import { shift_left_icon, shift_right_icon } from "../../../assets/applicants";
// import {
//   GetApplicantsListPayload,
//   GetApplicantsListResponse,
// } from "../../../data/api/apiTypes";
// import { useHistory, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";

// interface Props {
//   applicantsList: GetApplicantsListResponse;
//   filters: GetApplicantsListPayload;
//   prevPagePath?: string;
//   nextPagePath?: string;
//   content: String;
//   setFilter: (payload: GetApplicantsListPayload) => void;
// }

// const PageBtn: FC<Props> = ({
//   applicantsList,
//   filters,
//   prevPagePath,
//   nextPagePath,
//   content,
//   setFilter,
// }) => {
//   const history = useHistory();
//   const pathname = useLocation().pathname.slice(1);
//   const [prevNextBtn, setPrevNextBtn] = useState({
//     prevBtn: false,
//     nextBtn: false,
//   });

//   const dispatch = useDispatch();

//   const nowTotalPage = applicantsList.total_pages / 4;
//   const change = [filters];

//   useEffect(() => {
//     let isSuccessAction = undefined;
//     switch (pathname) {
//       case `applicant${nowTotalPage}`:
//         isSuccessAction = setFilter({ page: nowTotalPage });
//         break;
//       case `applicant${nowTotalPage + 1}`:
//         isSuccessAction = setFilter({ page: nowTotalPage + 1 });
//         break;
//       case `applicant${nowTotalPage + 2}`:
//         isSuccessAction = setFilter({ page: nowTotalPage + 2 });
//         break;
//       case `applicant${nowTotalPage + 3}`:
//         isSuccessAction = setFilter({ page: nowTotalPage + 3 });
//         break;
//     }
//     if (isSuccessAction) {
//       if (prevNextBtn.nextBtn) {
//         history.push(nextPagePath);
//       }
//     } else if (isSuccessAction === false) {
//       console.log("실패");
//     } else if (isSuccessAction === undefined) {
//       console.log("요청이 안갔습니다");
//     }
//   }, [setFilter, nowTotalPage, prevNextBtn.prevBtn, prevNextBtn.nextBtn]);

//   const prevBtnClickHandler = () => {
//     history.push(prevPagePath);
//     setPrevNextBtn({ prevBtn: true, nextBtn: false });
//   };

//   const nextBtnClickHandler = () => {
//     switch (pathname) {
//       case "introduction":
//         introSetState.saveBoth({ selfIntroduction, studyPlan });
//         break;
//       case "select-type":
//         dispatch({ type: SELECTTYPE });
//         break;
//       case "information":
//         dispatch({ type: INFORMATION });
//         if (selectTypeState.educationalStatus !== "QUALIFICATION_EXAM")
//           dispatch({ type: GRADUATE_INFORMATION });
//         break;
//       case "grade":
//         dispatch({ type: SAVE_GRADE });
//         break;
//       case "preview":
//         setIsOpenSubmitModal(true);
//         break;
//       default:
//     }
//     setPrevNextBtn({ prevBtn: false, nextBtn: true });
//   };

//   const prevBtn = useMemo(() => {
//     if (content === "이전") {
//       if (disabled)
//         return (
//           <S.PageBtn disabled={disabled}>
//             <img src={left_arrow_disabled} />
//             <div>{content}</div>
//           </S.PageBtn>
//         );
//       else
//         return (
//           <S.PageBtn disabled={disabled} onClick={prevBtnClickHandler}>
//             <img src={left_arrow} />
//             <div>{content}</div>
//           </S.PageBtn>
//         );
//     } else return;
//   }, [disabled, ...change]);

//   const nextBtn = useMemo(() => {
//     if (content === "다음") {
//       if (disabled)
//         return (
//           <S.PageBtn disabled={disabled}>
//             <div>{content}</div>
//             <img src={right_arrow_disabled} />
//           </S.PageBtn>
//         );
//       else
//         return (
//           <S.PageBtn disabled={disabled} onClick={nextBtnClickHandler}>
//             <div>{content}</div>
//             <img src={right_arrow} />
//           </S.PageBtn>
//         );
//     } else return;
//   }, [disabled, ...change]);

//   return (
//     <>
//       {prevBtn}
//       {nextBtn}
//     </>
//   );
// };

// export default PageBtn;

export {};
