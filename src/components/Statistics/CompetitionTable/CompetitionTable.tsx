import React, { FC } from "react";
import * as S from "../style";
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
              158 ~ 170
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["158-170"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              145 ~ 157
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["145-157"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              132 ~ 144
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["132-144"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              119 ~ 131
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["119-131"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              106 ~ 118
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["106-118"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              93 ~ 105
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["93-105"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              80 ~ 92
            </td>
            <td rowSpan={2} className="table-border-right">
              {commonScore["80-92"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left table-border-bottom"
            >
              79점 이하
            </td>
            <td rowSpan={2} className="table-border-right table-border-bottom">
              {commonScore["-79"] || "0"}
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
              98 ~ 110
            </td>
            <td rowSpan={2}>{meisterScore["98-110"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["98-110"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              85 ~ 97
            </td>
            <td rowSpan={2}>{meisterScore["85-97"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["85-97"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              72 ~ 84
            </td>
            <td rowSpan={2}>{meisterScore["72-84"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["72-84"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              59 ~ 71
            </td>
            <td rowSpan={2}>{meisterScore["59-71"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["59-71"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              46 ~ 58
            </td>
            <td rowSpan={2}>{meisterScore["46-58"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["46-58"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              33 ~ 45
            </td>
            <td rowSpan={2}>{meisterScore["33-45"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["33-45"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left"
            >
              20 ~ 32
            </td>
            <td rowSpan={2}>{meisterScore["20-32"] || "0"}</td>
            <td rowSpan={2} className="table-border-right">
              {socialScore["20-32"] || "0"}
            </td>
          </tr>
          <tr />
          <tr>
            <td
              rowSpan={2}
              className="table-color_background table-border-left table-border-bottom"
            >
              19점 이하
            </td>
            <td rowSpan={2} className="table-border-bottom">
              {meisterScore["-19"] || "0"}
            </td>
            <td rowSpan={2} className="table-border-right table-border-bottom">
              {socialScore["-19"] || "0"}
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
