import React, { FC } from "react";
import * as S from "../../../style";
import { useStatistics } from "../../../../../hooks/statistics";

const SocialGraph: FC = () => {
  const [isWidthOfSocialGraphBar, setIsWidthOfSocialGraphBar] =
    React.useState<any>();
  const [isAppearGraphOpa, setIsAppearGraphOpa] =
    React.useState<boolean>(false);
  const {
    statisticsStore: {
      statistics: { social_applicant },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    // getStatistics({ area: "all" });
  }, []);
  React.useEffect(() => {
    setIsWidthOfSocialGraphBar(social_applicant.applicant_count);
    setIsAppearGraphOpa(true);
  }, []);

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
          {social_applicant.competition_rate}:1
        </S.GraphCompetitionRate>
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default SocialGraph;
