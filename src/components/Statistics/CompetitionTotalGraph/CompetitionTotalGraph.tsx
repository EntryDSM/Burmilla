import React, { FC } from "react";
import * as S from "../style";
import { useStatistics } from "../../../hooks/statistics";
import { GraphRateItems } from "./CompetitionGraphs/GraphRateItems";
import { CommonGraph, MeisterGraph, SocialGraph } from "./CompetitionGraphs";
import {
  CommonScoreDistribution,
  SpecialScoreDistribution,
} from "../../../data/api/apiTypes";

interface Props {
  commonScore: CommonScoreDistribution;
  meisterScore: SpecialScoreDistribution;
  socialScore: SpecialScoreDistribution;
  totalApplicantCount: number;
  totalCompetitionRate: number;
}

const CompetitionTotalGraph: FC<Props> = ({
  commonScore,
  meisterScore,
  socialScore,
  totalApplicantCount,
  totalCompetitionRate,
}) => {
  return (
    <S.CompetitionTotalGraphWrapper>
      <S.CompetitionFreshmanTotal>
        <span>총계:</span>
        <S.TotalApplicantScore>{totalApplicantCount}명</S.TotalApplicantScore>
        <span>경쟁률:</span>
        <S.TotalCompetitionRate>
          {totalCompetitionRate}:1
        </S.TotalCompetitionRate>
      </S.CompetitionFreshmanTotal>
      <S.CompetitionGraphContainer>
        <CommonGraph commonScore={commonScore} />
        <MeisterGraph meisterScore={meisterScore} />
        <SocialGraph socialScore={socialScore} />
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
