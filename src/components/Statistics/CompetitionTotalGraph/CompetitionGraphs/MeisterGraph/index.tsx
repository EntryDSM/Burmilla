import React, { FC } from "react";
import * as S from "../../../style";
import { useStatistics } from "../../../../../hooks/statistics";

const MeisterGraph: FC = () => {
  const {
    statisticsStore: {
      statistics: { meister_applicant },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    // getStatistics({ area: "all" });
  }, []);

  return (
    <S.GraphWrapper>
      <S.GraphTitle>마이스터</S.GraphTitle>
      <S.GraphChart>
        <S.GraphBar></S.GraphBar>
        <S.GraphCompetitionRate>
          {meister_applicant.competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default MeisterGraph;
