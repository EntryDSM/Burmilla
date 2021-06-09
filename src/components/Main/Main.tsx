import React, { FC } from "react";
import * as S from "./style";
import MainContent from "./content";
import Progress from "./progress";

interface Props {
  date: string;
}

const Main: FC<Props> = ({ date }) => {
  return (
    <S.Main>
      <S.MainBackground />
      <S.MainWrapper>
        <MainContent date={date} />
      </S.MainWrapper>
    </S.Main>
  );
};

export default Main;
