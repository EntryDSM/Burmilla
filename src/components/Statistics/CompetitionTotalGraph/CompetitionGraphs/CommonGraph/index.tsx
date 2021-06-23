import React, { FC } from "react";
import * as S from "../../../style";
import { useStatistics } from "../../../../../hooks/statistics";

const CommonGraph: FC = () => {
  const [isWidthOfCommonGraphBar, setIsWidthOfCommonGraphBar] =
    React.useState<any>();
  const {
    statisticsStore: {
      statistics: { common_applicant },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    // getStatistics({ area: "all" });
  }, []);
  React.useEffect(() => {
    setIsWidthOfCommonGraphBar(common_applicant.applicant_count);
  }, []);

  const graphBarContent = () => {
    if (isWidthOfCommonGraphBar >= 1) {
      return (
        <S.GraphBarContentText>{isWidthOfCommonGraphBar}</S.GraphBarContentText>
      );
    }
  };

  return (
    <S.GraphWrapper>
      <S.GraphTitle>일반</S.GraphTitle>
      <S.GraphChart>
        <S.CommonGraphBar isWidthOfCommonGraphBar={isWidthOfCommonGraphBar}>
          {graphBarContent()}
        </S.CommonGraphBar>
        <S.GraphCompetitionRate>
          {common_applicant.competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default CommonGraph;
