import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "../../../../../assets/schedule";
import { processTimeType } from "../../../../../data/modules/redux/reducer/schedule/interface";
import { END_DATE } from "src/data/modules/redux/reducer/schedule/scheduleConstance";

interface Props {
  date: Array<processTimeType>;
  setEndScheduleMonth: (payload: number) => void;
}

const MonthSelect: FC<Props> = ({ date, setEndScheduleMonth }) => {
  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState("normal");
  const onestToThirtyOnest = [...Array(12)].map((_, i) => i + 1);

  const onSelectClick = () => {
    if (active === true) {
      setActive(false);
      setDisabled("normal");
    } else {
      setActive(true);
      setDisabled("enabled");
    }
  };

  const onSelectMonthClick = (e) => {
    const month = e.target.innerText;
    month < 10 ? setEndScheduleMonth(0 + month) : setEndScheduleMonth(month);
    localStorage.setItem("endScheduleMonth", JSON.stringify(month));
  };

  const getLocalStorage =
    JSON.parse(localStorage.getItem("endScheduleMonth")) || "10";

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  return (
    <S.Select disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent>
        <p>
          {date.filter((date) => date.type === END_DATE)[0].date.slice(5, 7) &&
            getLocalStorage}
        </p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {onestToThirtyOnest.map((month) => {
            return <p onClick={onSelectMonthClick}>{month}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
