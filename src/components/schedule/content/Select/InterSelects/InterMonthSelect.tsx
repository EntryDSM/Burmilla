import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "../../../../../assets/schedule";

interface Props {
  setInterviewScheduleMonth: (payload: number) => void;
}

const MonthSelect: FC<Props> = ({ setInterviewScheduleMonth }) => {
  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState("normal");
  const JanuaryToDecember = [...Array(12)].map((_, i) => i + 1);

  const onSelectClick = () => {
    if (active === true) {
      setActive(false);
      setDisabled("normal");
    } else {
      setActive(true);
      setDisabled("enabled");
    }
  };

  const onScheduleMonthClick = (e) => {
    const month = e.target.innerText;
    month < 10
      ? setInterviewScheduleMonth(0 + month)
      : setInterviewScheduleMonth(month);
    localStorage.setItem("interviewScheduleMonth", JSON.stringify(month));
  };

  const getLocalStorage = JSON.parse(
    localStorage.getItem("interviewScheduleMonth") || "10"
  );

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  return (
    <S.Select disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent>
        <p>{getLocalStorage}</p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {JanuaryToDecember.map((month) => {
            return (
              <p data-id={1} onClick={onScheduleMonthClick} key={month}>
                {month}
              </p>
            );
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
