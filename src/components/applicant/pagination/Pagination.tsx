import React, { FC } from "react";
import * as S from "./style";
import { shift_left_icon, shift_right_icon } from "../../../assets/applicants";
import { getIndexList } from "../../../utils/pagination";
import { SET_FILTER } from "../../../data/modules/redux/action/applicant/interface";
import { useDispatch } from "react-redux";
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

  const dispatch = useDispatch();

  React.useEffect(() => {
    setIndexList(getIndexList(currentIndex, applicantsList.total_pages));
  }, [currentIndex, applicantsList.total_pages]);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [applicantsList.total_pages]);

  const handleClickIndex = React.useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setFilter({
        page: index - 1,
      });
      // dispatch({ type: SET_FILTER });
    },
    [setFilter, dispatch]
  );

  const handleClickPrev = React.useCallback(() => {
    if (currentIndex > 1) setCurrentIndex(currentIndex - 1);
    setFilter({
      page: currentIndex,
    });
    dispatch({ type: SET_FILTER });
  }, [currentIndex, SET_FILTER]);

  const handleClickNext = React.useCallback(() => {
    if (currentIndex < applicantsList.total_pages)
      setCurrentIndex(currentIndex + 1);
    setFilter({
      page: currentIndex,
    });
    dispatch({ type: SET_FILTER });
  }, [currentIndex, applicantsList.total_pages, SET_FILTER]);

  const nextBtn = React.useMemo(() => {
    return (
      <S.PageBtn className="move-btn" onClick={handleClickNext}>
        <img src={shift_right_icon} alt="shift_right" />
      </S.PageBtn>
    );
  }, [filters]);

  const prevBtn = React.useMemo(() => {
    return (
      <S.PageBtn className="move-btn" onClick={handleClickPrev}>
        <img src={shift_left_icon} alt="shift_left" />
      </S.PageBtn>
    );
  }, [filters]);

  return (
    <S.PaginationContainer className="no-select">
      {prevBtn}
      {indexList.map((i) => (
        <S.PageBtn
          key={i.toString()}
          className={currentIndex === i && "selected"}
          onClick={() => handleClickIndex(i)}
        >
          {i}
        </S.PageBtn>
      ))}
      {nextBtn}
    </S.PaginationContainer>
  );
};
export default Pagination;
