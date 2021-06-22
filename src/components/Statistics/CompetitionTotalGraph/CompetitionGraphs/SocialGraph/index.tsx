import React, { FC } from "react";
import * as S from "../../../style";
import { useStatistics } from "../../../../../hooks/statistics";

const SocialGraph: FC = () => {
  const {
    statisticsStore: {
      statistics: { social_applicant },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    // getStatistics({ area: "all" });
  }, []);

  return (
    <S.GraphWrapper>
      <S.GraphTitle>사회통합</S.GraphTitle>
      <S.GraphChart>
        <S.GraphBar></S.GraphBar>
        <S.GraphCompetitionRate>
          {social_applicant.competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default SocialGraph;
