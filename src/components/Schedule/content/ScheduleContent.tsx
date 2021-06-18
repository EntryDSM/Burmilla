import React, { FC } from "react";
import * as S from "../style";
import { monthDate, dayDate } from "./scheduleConstance";

interface Props {
  scheduleName: string;
  scheduleImg: string;
  scheduleImgAlt: string;
}

const ScheduleContent: FC<Props> = ({
  scheduleName,
  scheduleImg,
  scheduleImgAlt,
}) => {
  const [monthDatas, setMonthDatas] = React.useState([]);
  const [dayDatas, setDayDatas] = React.useState([]);

  React.useEffect(() => {
    setMonthDatas(
      monthDate.map((monthInfo) => ({
        month: monthInfo.month,
      }))
    );

    setDayDatas(
      dayDate.map((dayInfo) => ({
        day: dayInfo.day,
      }))
    );
  }, []);

  const dateSelectOption = () => {
    if (scheduleName === "원서 작성") {
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect>
                {monthDatas &&
                  monthDatas.map((months) => {
                    return <p>{months.month}</p>;
                  })}
              </S.ScheduleDateSelect>
              <span>월</span>
            </S.ScheduleSelect>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect>
                {dayDatas &&
                  dayDatas.map((days) => {
                    return <p>{days.day}</p>;
                  })}
              </S.ScheduleDateSelect>
              <span>일</span>
            </S.ScheduleSelect>
          </S.ScheduleDateSelectBox>
          <S.ScheduleDateTitle className="dead-line">
            마감일
          </S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect>
                {monthDatas &&
                  monthDatas.map((months) => {
                    return <p>{months.month}</p>;
                  })}
              </S.ScheduleDateSelect>
              <span>월</span>
            </S.ScheduleSelect>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect>
                {dayDatas &&
                  dayDatas.map((days) => {
                    return <p>{days.day}</p>;
                  })}
              </S.ScheduleDateSelect>
              <span>일</span>
            </S.ScheduleSelect>
          </S.ScheduleDateSelectBox>
        </>
      );
    } else {
      return (
        <>
          <S.ScheduleDateTitle className="scheduleSelectBox-tail">
            시작일
          </S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect>
                {monthDatas &&
                  monthDatas.map((months) => {
                    return <p>{months.month}</p>;
                  })}
              </S.ScheduleDateSelect>
              <span>월</span>
            </S.ScheduleSelect>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect>
                {dayDatas &&
                  dayDatas.map((days) => {
                    return <p>{days.day}</p>;
                  })}
              </S.ScheduleDateSelect>
              <span>일</span>
            </S.ScheduleSelect>
          </S.ScheduleDateSelectBox>
        </>
      );
    }
  };
  return (
    <S.ScheduleContent>
      <S.ScheduleContentBox>
        <S.ScheduleTitle>{scheduleName}</S.ScheduleTitle>
        <S.ScheduleImg>
          <img src={scheduleImg} alt={scheduleImgAlt} />
        </S.ScheduleImg>
        <S.ScheduleDate>
          <S.ScheduleDateBody>{dateSelectOption()}</S.ScheduleDateBody>
        </S.ScheduleDate>
      </S.ScheduleContentBox>
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
