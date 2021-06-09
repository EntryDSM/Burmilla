import React, { FC } from "react";
import * as S from "../style";

interface Props {
  progressName: string;
}

const ProgressContent: FC<Props> = ({ progressName }) => {
  return (
    <S.ProgressContent>
      <S.ProgressTextWrapper>
        <S.ProgressText>{progressName}</S.ProgressText>
      </S.ProgressTextWrapper>
    </S.ProgressContent>
  );
};

export default ProgressContent;
