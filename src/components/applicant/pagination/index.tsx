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
  filters: GetApplicantsListPayload;
  setFilter: (payload: GetApplicantsListPayload) => void;
}

const Pagination: FC<Props> = ({ applicantsList, filters, setFilter }) => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [indexList, setIndexList] = React.useState<number[]>([]);

  React.useEffect(() => {
    setIndexList(getIndexList(currentIndex, applicantsList.total_pages));
  }, [currentIndex, applicantsList.total_pages]);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [applicantsList.total_pages]);

  const handleClickIndex = React.useCallback((index: number) => {
    setCurrentIndex(index);
    setFilter({
      page: index - 1,
    });
  }, []);
  const handleClickPrev = React.useCallback(() => {
    if (currentIndex > 1) setCurrentIndex(currentIndex - 1);
    setFilter({
      page: currentIndex,
    });
  }, [currentIndex]);
  const handleClickNext = React.useCallback(() => {
    if (currentIndex < applicantsList.total_pages)
      setCurrentIndex(currentIndex + 1);
    setFilter({
      page: currentIndex,
    });
  }, [currentIndex, applicantsList.total_pages]);

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
