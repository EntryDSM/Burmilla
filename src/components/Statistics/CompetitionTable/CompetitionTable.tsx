import React, { FC } from "react";
import * as S from "../style";
import { useStatistics } from "../../../hooks/statistics";

const CompetitionTable: FC = () => {
  const {
    statisticsStore: {
      statistics: {
        meister_applicant,
        social_applicant,
        common_applicant,
        total_applicant_count,
      },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    getStatistics({ area: "all" });
  }, []);

  return (
    <S.CompetitionTableWrapper>
      <table>
        <tbody>
          <tr>
            <td rowSpan={2}></td>
            <td rowSpan={2}>일반전형</td>
          </tr>
          <tr>
            <td rowSpan={2}>141 ~ 150</td>
            <td rowSpan={2}>{common_applicant["141-150"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>131 ~ 140</td>
            <td rowSpan={2}>{common_applicant["131 ~ 140"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>121 ~ 130</td>
            <td rowSpan={2}>{common_applicant["121 ~ 130"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>111 ~ 120</td>
            <td rowSpan={2}>{common_applicant["111 ~ 120"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>101 ~ 110</td>
            <td rowSpan={2}>{common_applicant["101 ~ 110"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>91 ~ 100</td>
            <td rowSpan={2}>{common_applicant["91 ~ 100"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>81 ~ 90</td>
            <td rowSpan={2}>{common_applicant["81 ~ 90"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>80점 이하</td>
            <td rowSpan={2}>{common_applicant["-80"] || "0"}</td>
          </tr>
        </tbody>
      </table>
      <div />
      <table>
        <tbody>
          <tr>
            <td rowSpan={2}></td>
            <td rowSpan={2}>마이스터</td>
            <td rowSpan={2}>사회통합</td>
          </tr>
          <tr>
            <td rowSpan={2}>81 ~ 90</td>
            <td rowSpan={2}>{meister_applicant["81-90"] || "0"}</td>
            <td rowSpan={2}>{social_applicant["81-90"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>71 ~ 80</td>
            <td rowSpan={2}>{meister_applicant["71-80"] || "0"}</td>
            <td rowSpan={2}>{social_applicant["71-80"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>61 ~ 70</td>
            <td rowSpan={2}>{meister_applicant["61-70"] || "0"}</td>
            <td rowSpan={2}>{social_applicant["61-70"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>51 ~ 60</td>
            <td rowSpan={2}>{meister_applicant["51-60"] || "0"}</td>
            <td rowSpan={2}>{social_applicant["51-60"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>41 ~ 50</td>
            <td rowSpan={2}>{meister_applicant["41-50"] || "0"}</td>
            <td rowSpan={2}>{social_applicant["41-50"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>31 ~ 40</td>
            <td rowSpan={2}>{meister_applicant["31-40"] || "0"}</td>
            <td rowSpan={2}>{social_applicant["31-40"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>21 ~ 30</td>
            <td rowSpan={2}>{meister_applicant["21-30"] || "0"}</td>
            <td rowSpan={2}>{social_applicant["21-30"] || "0"}</td>
          </tr>
          <tr>
            <td rowSpan={2}>20점 이하</td>
            <td rowSpan={2}>{meister_applicant["-20"] || "0"}</td>
            <td rowSpan={2}>{social_applicant["-20"] || "0"}</td>
          </tr>
        </tbody>
      </table>
      <S.TotalScore>총계: {total_applicant_count}</S.TotalScore>
    </S.CompetitionTableWrapper>
  );
};

export default CompetitionTable;
