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
  getApplicantsList: (payload: GetApplicantsListPayload) => void;
  setFilter: (payload: GetApplicantsListPayload) => void;
}

const Pagination: FC<Props> = ({
  applicantsList,
  filters,
  getApplicantsList,
  setFilter,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [indexList, setIndexList] = React.useState<number[]>([]);

  React.useEffect(() => {
    setIndexList(getIndexList(currentIndex, applicantsList.total_pages));
  }, [currentIndex, applicantsList.total_pages]);

  const carcPage = () => {
    if (currentIndex < 0) {
      return currentIndex + 1;
    }
    if (currentIndex === 1) {
      return currentIndex;
    }
    if (currentIndex > 1) {
      return currentIndex - 2;
    }
  };

  React.useEffect(() => {
    setFilter({
      page: carcPage(),
    });
    getApplicantsList(filters);
  }, [currentIndex]);

  React.useEffect(() => {
    setCurrentIndex(1);
  }, []);

  const handleClickIndex = async (index: number) => {
    await setCurrentIndex(index);
  };

  const handleClickPrev = async () => {
    if (currentIndex > 1) await setCurrentIndex(currentIndex - 1);
  };

  const handleClickNext = async () => {
    if (currentIndex < applicantsList.total_pages)
      await setCurrentIndex(currentIndex + 1);
  };

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
