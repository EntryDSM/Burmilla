import React, { FC } from "react";

import * as S from "./style";
import { shift_left_icon, shift_right_icon } from "../../../assets/applicants";
import { getIndexList } from "../../../utils/pagination";
import {
  GetApplicantsListPayload,
  GetApplicantsListResponse,
} from "../../../data/api/apiTypes";

interface Props {
  applicantsList: GetApplicantsListResponse;
  setFilter: (payload: GetApplicantsListPayload) => void;
}

const Pagination: FC<Props> = ({ applicantsList, setFilter }) => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [indexList, setIndexList] = React.useState<number[]>([]);

  React.useEffect(() => {
    setIndexList(getIndexList(currentIndex, applicantsList.total_elements));
  }, [applicantsList.total_elements, currentIndex]);

  React.useEffect(() => {
    setFilter({
      size: currentIndex,
    });
  }, [currentIndex]);

  React.useEffect(() => {
    setCurrentIndex(1);
  }, [applicantsList.total_elements]);

  const handleClickIndex = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);
  const handleClickPrev = React.useCallback(() => {
    if (currentIndex > 1) setCurrentIndex(currentIndex - 1);
  }, [currentIndex, applicantsList.total_elements]);
  const handleClickNext = React.useCallback(() => {
    if (currentIndex < applicantsList.total_elements)
      setCurrentIndex(currentIndex + 1);
  }, [currentIndex, applicantsList.total_elements]);

  return (
    <S.PaginationContainer className="no-select">
      <S.PageBtn className="move-btn" onClick={handleClickPrev}>
        <img src={shift_left_icon} alt="shift_left" />
      </S.PageBtn>
      {indexList.map((i) => (
        <S.PageBtn
          key={i.toString()}
          className={currentIndex === i && "selected"}
          onClick={() => handleClickIndex(i)}
        >
          {i}
        </S.PageBtn>
      ))}
      <S.PageBtn className="move-btn" onClick={handleClickNext}>
        <img src={shift_right_icon} alt="shift_right" />
      </S.PageBtn>
    </S.PaginationContainer>
  );
};
export default Pagination;
