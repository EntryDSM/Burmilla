import React, { FC } from "react";
import * as S from "./style";
import MainContent from "./content";
import Progress from "./progress";
import { processType } from "../../data/modules/redux/reducer/schedule/interface";
import { scheduleType } from "../../data/modules/redux/reducer/schedule/scheduleConstance";
import { useHistory } from "react-router-dom";

interface Props {
  status: scheduleType;
  process: processType;
  date: string;
}

const Main: FC<Props> = ({ status, process, date }) => {
  const history = useHistory();

  const mainButtonClickHandler = () => {
    history.push("/schedule");
  };

  console.log(date);
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
