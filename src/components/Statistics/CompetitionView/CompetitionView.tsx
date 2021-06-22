import React, { FC } from "react";
import * as S from "../style";
import { useStatistics } from "../../../hooks/statistics";

const CompetitionView: FC = () => {
  const {
    statisticsStore: {
      statistics: { total_applicant_count, total_competition_rate },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    // getStatistics({ area: "all" });
  }, []);

  return (
    <S.CompetitionViewWrapper className="no-select">
      <tbody>
        <tr>
          <S.CompetitionViewTH>지원자 수 : </S.CompetitionViewTH>
          <S.CompetitionViewTD>
            <b>{total_applicant_count}</b> 명
          </S.CompetitionViewTD>
        </tr>
        <tr>
          <S.CompetitionViewTH>경쟁률 : </S.CompetitionViewTH>
          <S.CompetitionViewTD>
            <b>{total_competition_rate} : 1</b>
          </S.CompetitionViewTD>
        </tr>
      </tbody>
    </S.CompetitionViewWrapper>
  );
};

export default CompetitionView;
