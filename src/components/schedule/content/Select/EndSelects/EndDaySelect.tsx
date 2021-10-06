import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "../../../../../assets/schedule";
import { processTimeType } from "../../../../../data/modules/redux/reducer/schedule/interface";
import { END_DATE } from "src/data/modules/redux/reducer/schedule/scheduleConstance";

interface Props {
  date: Array<processTimeType>;
  setEndScheduleDay: (payload: number) => void;
}

const MonthSelect: FC<Props> = ({ date, setEndScheduleDay }) => {
  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState("normal");
  const onestToThirtyOnest = [...Array(31)].map((_, i) => i + 1);

  const onSelectClick = () => {
    if (active === true) {
      setActive(false);
      setDisabled("normal");
    } else {
      setActive(true);
      setDisabled("enabled");
    }
  };

  const onSelectDayClick = (e) => {
    const day = e.target.innerText;
    day < 10 ? setEndScheduleDay(0 + day) : setEndScheduleDay(day);
    localStorage.setItem("endScheduleDay", JSON.stringify(day));
  };

  const getLocalStorage =
    JSON.parse(localStorage.getItem("endScheduleDay")) || "21";

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  return (
    <S.Select disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent>
        <p>
          {date.filter((date) => date.type === END_DATE)[0].date.slice(8, 10) &&
            getLocalStorage}
        </p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {onestToThirtyOnest.map((day) => {
            return <p onClick={onSelectDayClick}>{day}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
