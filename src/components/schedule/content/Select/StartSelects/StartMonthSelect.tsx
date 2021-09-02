import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "../../../../../assets/schedule";
import { scheduleType } from "../../../../../data/modules/redux/reducer/schedule/scheduleConstance";

interface Props {
  startScheduleMonth: number;
  setStartScheduleMonth: (payload: number) => void;
}

const MonthSelect: FC<Props> = ({
  startScheduleMonth,
  setStartScheduleMonth,
}) => {
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
      ? setStartScheduleMonth(0 + month)
      : setStartScheduleMonth(month);
  };

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  return (
    <S.Select disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent>
        <p>{startScheduleMonth}</p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {JanuaryToDecember.map((month) => {
            return (
              <p onClick={onScheduleMonthClick} key={month}>
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
