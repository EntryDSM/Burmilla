import React, { FC } from "react";
import * as S from "../style";
import { useStatistics } from "../../../hooks/statistics";
import {
  CommonScoreDistribution,
  SpecialScoreDistribution,
} from "../../../data/api/apiTypes";

interface Props {
  commonScore: CommonScoreDistribution;
  meisterScore: SpecialScoreDistribution;
  socialScore: SpecialScoreDistribution;
  totalApplicantCount: number;
}

const CompetitionTable: FC<Props> = ({
  commonScore,
  meisterScore,
  socialScore,
  totalApplicantCount,
}) => {
  // const {
  //   state: {
  //     statistics: {
  //       commonScore,
  //       meisterScore,
  //       social_score,
  //       total_applicant_count,
  //     },
  //   },
  //   setState: { getStatistics },
  // } = useStatistics();

  // React.useEffect(() => {
  //   getStatistics();
  // }, []);

  return (
    <S.CompetitionTableWrapper>
      <table className="common_score-table">
        <tbody>
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left table-border-top"
            ></td>
            <td
              rowSpan={2}
              className="table-color_background table-border-right table-border-top table-applicant_title"
            >
              일반전형
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              141 ~ 150
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["141-150"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              131 ~ 140
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["131-140"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              121 ~ 130
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["121-130"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              111 ~ 120
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["111-120"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              101 ~ 110
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["101-110"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              91 ~ 100
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["91-100"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              81 ~ 90
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["81-90"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left table-border-bottom"
            >
              80점 이하
            </td>
            <td rowSpan={2} className="table-border-right table-border-bottom">
              {commonScore["-80"] || "0"}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="meister_score-table">
        <tbody>
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left table-border-top"
            ></td>
            <td
              rowSpan={2}
              className="table-color_background table-border-top table-applicant_title"
            >
              마이스터
            </td>
            <td
              rowSpan={2}
              className="table-color_background table-border-right table-border-top table-applicant_title"
            >
              사회통합
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              81 ~ 90
            </td>
            <td rowSpan={2}>{meisterScore["81-90"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["81-90"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              71 ~ 80
            </td>
            <td rowSpan={2}>{meisterScore["71-80"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["71-80"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              61 ~ 70
            </td>
            <td rowSpan={2}>{meisterScore["61-70"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["61-70"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              51 ~ 60
            </td>
            <td rowSpan={2}>{meisterScore["51-60"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["51-60"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              41 ~ 50
            </td>
            <td rowSpan={2}>{meisterScore["41-50"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["41-50"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              31 ~ 40
            </td>
            <td rowSpan={2}>{meisterScore["31-40"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["31-40"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              21 ~ 30
            </td>
            <td rowSpan={2}>{meisterScore["21-30"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["21-30"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left table-border-bottom"
            >
              20점 이하
            </td>
            <td rowSpan={2} className="table-border-bottom">
              {meisterScore["-20"] || "0"}
            </td>
            <td rowSpan={2} className="table-border-right table-border-bottom">
              {socialScore["-20"] || "0"}
            </td>
          </tr>
          <tr />
        </tbody>
      </table>
      <S.TotalScore>총계: {totalApplicantCount}명</S.TotalScore>
    </S.CompetitionTableWrapper>
  );
};

export default CompetitionTable;
