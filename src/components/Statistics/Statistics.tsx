import React, { FC } from "react";
import * as S from "./style";
import CompetitionTable from "./CompetitionTable";
import CompetitionView from "./CompetitionView";
import CompetitionTotalGraph from "./CompetitionTotalGraph";
import {
  CommonScoreDistribution,
  SpecialScoreDistribution,
} from "../../data/api/apiTypes";

interface Props {
  commonScore: CommonScoreDistribution;
  meisterScore: SpecialScoreDistribution;
  socialScore: SpecialScoreDistribution;
  totalApplicantCount: number;
  totalCompetitionRate: number;
}

const Statistics: FC<Props> = ({
  commonScore,
  meisterScore,
  socialScore,
  totalApplicantCount,
  totalCompetitionRate,
}) => {
  return (
    <S.StatisticsPageContainer>
      <S.StatisticsContainer>
        <S.StatisticsBox>
          <S.StatisticsTitle>입학원서 접수 현황</S.StatisticsTitle>
          <S.StatisticsSubTitle>Entry DSM 2021 Admin page</S.StatisticsSubTitle>
          <CompetitionView
            totalApplicantCount={totalApplicantCount}
            totalCompetitionRate={totalCompetitionRate}
          />
          <S.CompetitionTableTitle>
            2022년 신입생 지원률
          </S.CompetitionTableTitle>
          <CompetitionTotalGraph
            commonScore={commonScore}
            meisterScore={meisterScore}
            socialScore={socialScore}
            totalApplicantCount={totalApplicantCount}
            totalCompetitionRate={totalCompetitionRate}
          />
          <S.CompetitionTableTitle>
            2022년 신입생 환산점수
          </S.CompetitionTableTitle>
          <CompetitionTable
            commonScore={commonScore}
            meisterScore={meisterScore}
            socialScore={socialScore}
            totalApplicantCount={totalApplicantCount}
          />
        </S.StatisticsBox>
      </S.StatisticsContainer>
    </S.StatisticsPageContainer>
  );
};

export default Statistics;
