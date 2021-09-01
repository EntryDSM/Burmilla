import React, { FC } from "react";
import * as S from "../../../style";
import { CommonScoreDistribution } from "../../../../../data/api/apiTypes";

interface Props {
  commonScore: CommonScoreDistribution;
}

const CommonGraph: FC<Props> = ({ commonScore }) => {
  const [isWidthOfCommonGraphBar, setIsWidthOfCommonGraphBar] =
    React.useState<any>("");
  const [isAppearGraphOpa, setIsAppearGraphOpa] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setIsWidthOfCommonGraphBar(commonScore.common_count);
    setIsAppearGraphOpa(true);
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
        {isAppearGraphOpa && (
          <S.CommonGraphBar isWidthOfCommonGraphBar={isWidthOfCommonGraphBar}>
            {graphBarContent()}
          </S.CommonGraphBar>
        )}
        <S.GraphCompetitionRate>
          {commonScore.common_competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default CommonGraph;
