import React, { FC } from "react";
import * as S from "./style";
import CompetitionTable from "./CompetitionTable";
import CompetitionView from "./CompetitionView";
import CompetitionTotalGraph from "./CompetitionTotalGraph";

const Statistics: FC = () => {
  return (
    <S.StatisticsPageContainer>
      <S.StatisticsContainer>
        <S.StatisticsBox>
          <S.StatisticsTitle>입학원서 접수 현황</S.StatisticsTitle>
          <S.StatisticsSubTitle>Entry DSM 2021 Admin page</S.StatisticsSubTitle>
          <CompetitionTable />
        </S.StatisticsBox>
      </S.StatisticsContainer>
    </S.StatisticsPageContainer>
  );
};

export default Statistics;