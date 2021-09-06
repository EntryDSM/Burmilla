import React, { FC } from "react";

import * as S from "./style";
import { ApplicantEvaluation } from "../../../../../data/api/apiTypes";

interface Props {
  applicantEvaluation: ApplicantEvaluation;
}

const Documents: FC<Props> = ({
  applicantEvaluation: { self_introduce, study_plan },
}) => {
  const [selectedItem, setSelectedItem] = React.useState("자기소개서");

  const handleClickContent = React.useCallback(
    (content: string) => {
      setSelectedItem(content);
    },
    [selectedItem]
  );

  const contents = ["자기소개서", "학업계획서"];

  return (
    <S.Wrapper>
      <S.ContentSelector>
        {contents.map((v) => (
          <span
            key={v}
            className={selectedItem === v ? "selected" : ""}
            onClick={() => handleClickContent(v)}
          >
            {v}
          </span>
        ))}
      </S.ContentSelector>
      <S.Document>
        {selectedItem === contents[0] ? self_introduce : study_plan}
      </S.Document>
    </S.Wrapper>
  );
};

export default Documents;
