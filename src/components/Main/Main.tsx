import React, { FC } from "react";
import * as S from "./style";
import MainContent from "./content";
import Progress from "./progress";
import { processType } from "../../data/modules/redux/reducer/status/interface";
import { statusType } from "../../data/modules/redux/reducer/status/mainConstance";
import { useHistory } from "react-router-dom";

interface Props {
  status: statusType;
  process: processType;
  date: string;
}

const Main: FC<Props> = ({ status, process, date }) => {
  const history = useHistory();

  const mainButtonClickHandler = () => {
    history.push("/schedule");
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
        <Progress status={status} date={date} />
      </S.MainWrapper>
    </S.Main>
  );
};

export default Main;
