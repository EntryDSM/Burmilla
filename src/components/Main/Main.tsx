import React, { FC } from "react";
import * as S from "./style";
import MainContent from "./content";
import Progress from "./progress";
import { statusType } from "../../data/modules/redux/reducer/status/mainConstance";
import { useHistory } from "react-router-dom";

interface Props {
  status?: statusType;
  date?: string;
}

const Main: FC<Props> = ({ status, date }) => {
  const history = useHistory();
  const mainButtonClickHandler = () => {
    history.push("/");
  };
  return (
    <S.Main>
      <S.MainBackground />
      <S.MainWrapper>
        <MainContent
          {...process}
          buttonClickHandler={mainButtonClickHandler}
          date={date}
        />
      </S.MainWrapper>
      <Progress />
    </S.Main>
  );
};

export default Main;
