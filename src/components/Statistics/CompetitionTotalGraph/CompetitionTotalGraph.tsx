import React, { FC } from "react";
import * as S from "../style";
import { useStatistics } from "../../../hooks/statistics";
import { GraphRateItems } from "./CompetitionGraphs/GraphRateItems";
import { CommonGraph, MeisterGraph, SocialGraph } from "./CompetitionGraphs";

const CompetitionTotalGraph: FC = () => {
  const {
    statisticsStore: {
      statistics: { total_applicant_count, total_competition_rate },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    // getStatistics({ area: "all" });
  }, []);

  return (
    <S.CompetitionTotalGraphWrapper>
      <S.CompetitionFreshmanTotal>
        <span>총계:</span>
        <S.TotalApplicantScore>{total_applicant_count}명</S.TotalApplicantScore>
        <span>경쟁율:</span>
        <S.TotalCompetitionRate>
          {total_competition_rate}:1
        </S.TotalCompetitionRate>
      </S.CompetitionFreshmanTotal>
      <S.CompetitionGraphContainer>
        <CommonGraph />
        <MeisterGraph />
        <SocialGraph />
      </S.CompetitionGraphContainer>
      <S.GraphRateBar>
        {GraphRateItems.map((item) => (
          <S.GraphItemBox>{item.content}</S.GraphItemBox>
        ))}
      </S.GraphRateBar>
    </S.CompetitionTotalGraphWrapper>
  );
};

export default CompetitionTotalGraph;
