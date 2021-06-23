import React, { FC } from "react";
import * as S from "../../../style";
import { useStatistics } from "../../../../../hooks/statistics";

const MeisterGraph: FC = () => {
  const [isWidthOfMeisterGraphBar, setIsWidthOfMeisterGraphBar] =
    React.useState<any>();
  const {
    statisticsStore: {
      statistics: { meister_applicant },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    // getStatistics({ area: "all" });
  }, []);
  React.useEffect(() => {
    setIsWidthOfMeisterGraphBar(meister_applicant.applicant_count);
  }, []);

  const graphBarContent = () => {
    if (isWidthOfMeisterGraphBar >= 1) {
      return (
        <S.GraphBarContentText>
          {isWidthOfMeisterGraphBar}
        </S.GraphBarContentText>
      );
    }
  };

  return (
    <S.GraphWrapper>
      <S.GraphTitle>마이스터</S.GraphTitle>
      <S.GraphChart>
        <S.MeisterGraphBar isWidthOfMeisterGraphBar={isWidthOfMeisterGraphBar}>
          {graphBarContent()}
        </S.MeisterGraphBar>
        <S.GraphCompetitionRate>
          {meister_applicant.competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default MeisterGraph;
