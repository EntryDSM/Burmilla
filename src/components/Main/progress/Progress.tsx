import React, { FC } from "react";
import * as S from "../style";
import ProgressContent from "./ProgressContent";

interface Props {}

const Progress: FC<Props> = ({}) => {
  return (
    <S.Progress>
      <ProgressContent progressName="원서 작성" />
      <S.ProgressBlankBar />
      <ProgressContent progressName="1차 발표" />
      <S.ProgressBlankBar />
      <ProgressContent progressName="면접" />
      <S.ProgressBlankBar />
      <ProgressContent progressName="발표 및 등록" />
    </S.Progress>
  );
};

export default Progress;
