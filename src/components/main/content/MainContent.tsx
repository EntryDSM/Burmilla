import React, { FC } from "react";
import * as S from "../style";
import MainButton from "./MainButton";

interface Props {
  title: string | React.ReactNode;
  getDescription: (date: string) => React.ReactNode;
  buttonText: string;
  date: string;
  buttonClickHandler?: () => void;
}

const MainContent: FC<Props> = ({
  title,
  getDescription,
  buttonText,
  date,
  buttonClickHandler,
}) => {
  return (
    <S.MainContentWrapper>
      <S.MainSubTitle>대덕소프트웨어마이스터고등학교</S.MainSubTitle>
      <S.MainTitle>2022년 신입생 모집</S.MainTitle>
      <S.MainDescription className="mainDescription">{title}</S.MainDescription>
      <S.MainDescription className="subDescription">
        {getDescription(date.slice(0, 10))}
      </S.MainDescription>
      <MainButton onClick={buttonClickHandler}>{buttonText}</MainButton>
    </S.MainContentWrapper>
  );
};

export default MainContent;
