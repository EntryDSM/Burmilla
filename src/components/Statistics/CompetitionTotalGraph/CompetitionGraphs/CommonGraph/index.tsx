import React, { FC } from "react";
import * as S from "../../../style";
import { useStatistics } from "../../../../../hooks/statistics";

const CommonGraph: FC = () => {
  const {
    statisticsStore: {
      statistics: { common_applicant },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    // getStatistics({ area: "all" });
  }, []);

  return (
    <S.GraphWrapper>
      <S.GraphTitle>일반</S.GraphTitle>
      <S.GraphChart>
        <S.GraphBar></S.GraphBar>
        <S.GraphCompetitionRate>
          {common_applicant.competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default CommonGraph;
