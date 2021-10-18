import React, { FC } from "react";
import * as S from "../style";

interface Props {
  totalApplicantCount: number;
  totalCompetitionRate: number;
  total_submitted_applicant_count: number;
}

const CompetitionView: FC<Props> = ({
  totalApplicantCount,
  totalCompetitionRate,
  total_submitted_applicant_count,
}) => {
  return (
    <S.CompetitionViewWrapper className="no-select">
      <tbody>
        <tr>
          <S.CompetitionViewTH>지원자 수 : </S.CompetitionViewTH>
          <S.CompetitionViewTD>
            <b>{totalApplicantCount}</b> 명
          </S.CompetitionViewTD>
        </tr>
        <tr>
          <S.CompetitionViewTH>최종 제출자 수 : </S.CompetitionViewTH>
          <S.CompetitionViewTD>
            <b>{total_submitted_applicant_count}</b> 명
          </S.CompetitionViewTD>
        </tr>
        <tr>
          <S.CompetitionViewTH>
            경쟁률<span>(지원자 수 기준)</span> :{" "}
          </S.CompetitionViewTH>
          <S.CompetitionViewTD>
            <b>{totalCompetitionRate} : 1</b>
          </S.CompetitionViewTD>
        </tr>
      </tbody>
    </S.CompetitionViewWrapper>
  );
};

export default CompetitionView;
