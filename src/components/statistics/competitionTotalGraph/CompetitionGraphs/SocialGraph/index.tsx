import React, { FC } from "react";
import * as S from "../../../style";
import { SpecialScoreDistribution } from "../../../../../data/api/apiTypes";

interface Props {
  socialScore: SpecialScoreDistribution;
}

const SocialGraph: FC<Props> = ({ socialScore }) => {
  const [isWidthOfSocialGraphBar, setIsWidthOfSocialGraphBar] =
    React.useState<any>();
  const [isAppearGraphOpa, setIsAppearGraphOpa] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setIsWidthOfSocialGraphBar(socialScore.special_count);
    setIsAppearGraphOpa(true);
  }, [socialScore]);

  const graphBarContent = () => {
    if (isWidthOfSocialGraphBar >= 1) {
      return (
        <S.GraphBarContentText>{isWidthOfSocialGraphBar}</S.GraphBarContentText>
      );
    }
  };

  return (
    <S.GraphWrapper>
      <S.GraphTitle>사회통합</S.GraphTitle>
      <S.GraphChart>
        {isAppearGraphOpa && (
          <S.SocialGraphBar isWidthOfSocialGraphBar={isWidthOfSocialGraphBar}>
            {graphBarContent()}
          </S.SocialGraphBar>
        )}
        <S.GraphCompetitionRate>
          {socialScore.special_competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default SocialGraph;
