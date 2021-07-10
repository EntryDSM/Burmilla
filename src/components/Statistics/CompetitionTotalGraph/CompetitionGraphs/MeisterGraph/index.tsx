import React, { FC } from "react";
import * as S from "../../../style";
import { useStatistics } from "../../../../../hooks/statistics";
import { SpecialScoreDistribution } from "../../../../../data/api/apiTypes";

interface Props {
  meisterScore: SpecialScoreDistribution;
}

const MeisterGraph: FC<Props> = ({ meisterScore }) => {
  const [isWidthOfMeisterGraphBar, setIsWidthOfMeisterGraphBar] =
    React.useState<any>();
  const [isAppearGraphOpa, setIsAppearGraphOpa] =
    React.useState<boolean>(false);
  // const {
  //   state: {
  //     statistics: { meister_score },
  //   },
  //   setState: { getStatistics },
  // } = useStatistics();

  // React.useEffect(() => {
  //   getStatistics();
  // }, []);
  React.useEffect(() => {
    setIsWidthOfMeisterGraphBar(meisterScore.special_count);
    setIsAppearGraphOpa(true);
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
        {isAppearGraphOpa && (
          <S.MeisterGraphBar
            isWidthOfMeisterGraphBar={isWidthOfMeisterGraphBar}
          >
            {graphBarContent()}
          </S.MeisterGraphBar>
        )}
        <S.GraphCompetitionRate>
          {meisterScore.special_competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default MeisterGraph;
