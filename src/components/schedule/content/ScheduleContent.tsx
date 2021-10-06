import React, { FC } from "react";
import * as S from "../style";
import { StartMonthSelect, StartDaySelect } from "./Select/StartSelects";
import { EndMonthSelect, EndDaySelect } from "./Select/EndSelects";
import { FirstMonthSelect, FirstDaySelect } from "./Select/FirstSelects";
import { InterMonthSelect, InterDaySelect } from "./Select/InterSelects";
import { SecondMonthSelect, SecondDaySelect } from "./Select/SecondSelects";
import {
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  scheduleType,
  SECOND_ANNOUNCEMENT,
  START_DATE,
} from "../../../data/modules/redux/reducer/schedule/scheduleConstance";
import { processTimeType } from "../../../data/modules/redux/reducer/schedule/interface";

interface Props {
  scheduleImg: string;
  scheduleImgAlt: string;
  scheduleName: string;
  nowStatus: scheduleType;
  startScheduleMonth: number;
  startScheduleDay: number;
  endScheduleMonth: number;
  endScheduleDay: number;
  firstScheduleMonth: number;
  firstScheduleDay: number;
  interviewScheduleMonth: number;
  interviewScheduleDay: number;
  secondScheduleMonth: number;
  secondScheduleDay: number;
  date: Array<processTimeType>;
  setStartScheduleMonth: (payload: number) => void;
  setStartScheduleDay: (payload: number) => void;
  setEndScheduleMonth: (payload: number) => void;
  setEndScheduleDay: (payload: number) => void;
  setFirstScheduleMonth: (payload: number) => void;
  setFirstScheduleDay: (payload: number) => void;
  setInterviewScheduleMonth: (payload: number) => void;
  setInterviewScheduleDay: (payload: number) => void;
  setSecondScheduleMonth: (payload: number) => void;
  setSecondScheduleDay: (payload: number) => void;
  setStartDate: (payload: string) => void;
  setEndDate: (payload: string) => void;
  setFirstDate: (payload: string) => void;
  setInterviewDate: (payload: string) => void;
  setSecondDate: (payload: string) => void;
}

const ScheduleContent: FC<Props> = ({
  scheduleImg,
  scheduleImgAlt,
  scheduleName,
  nowStatus,
  startScheduleMonth,
  startScheduleDay,
  endScheduleMonth,
  endScheduleDay,
  firstScheduleMonth,
  firstScheduleDay,
  interviewScheduleMonth,
  interviewScheduleDay,
  secondScheduleMonth,
  secondScheduleDay,
  date,
  setStartScheduleMonth,
  setStartScheduleDay,
  setEndScheduleMonth,
  setEndScheduleDay,
  setFirstScheduleMonth,
  setFirstScheduleDay,
  setInterviewScheduleMonth,
  setInterviewScheduleDay,
  setSecondScheduleMonth,
  setSecondScheduleDay,
  setStartDate,
  setEndDate,
  setFirstDate,
  setInterviewDate,
  setSecondDate,
}) => {
  React.useEffect(() => {
    setStartDate(
      "2021-" + String(startScheduleMonth) + "-" + String(startScheduleDay)
    );
    setEndDate(
      "2021-" + String(endScheduleMonth) + "-" + String(endScheduleDay)
    );
    setFirstDate(
      "2021-" + String(firstScheduleMonth) + "-" + String(firstScheduleDay)
    );
    setInterviewDate(
      "2021-" +
        String(interviewScheduleMonth) +
        "-" +
        String(interviewScheduleDay)
    );
    setSecondDate(
      "2021-" + String(secondScheduleMonth) + "-" + String(secondScheduleDay)
    );
  }, [
    startScheduleMonth,
    startScheduleDay,
    endScheduleMonth,
    endScheduleDay,
    firstScheduleMonth,
    firstScheduleDay,
    interviewScheduleMonth,
    interviewScheduleDay,
    secondScheduleMonth,
    secondScheduleDay,
  ]);

  const selectDateType = () => {
    if (nowStatus === START_DATE)
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <StartMonthSelect
              date={date}
              setStartScheduleMonth={setStartScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <StartDaySelect
              date={date}
              setStartScheduleDay={setStartScheduleDay}
            />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
          <S.ScheduleDateTitle>마감일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <EndMonthSelect
              date={date}
              setEndScheduleMonth={setEndScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <EndDaySelect date={date} setEndScheduleDay={setEndScheduleDay} />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
        </>
      );
    if (nowStatus === FIRST_ANNOUNCEMENT)
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <FirstMonthSelect
              date={date}
              setFirstScheduleMonth={setFirstScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <FirstDaySelect
              date={date}
              setFirstScheduleDay={setFirstScheduleDay}
            />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
        </>
      );
    if (nowStatus === INTERVIEW)
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <InterMonthSelect
              date={date}
              setInterviewScheduleMonth={setInterviewScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <InterDaySelect
              date={date}
              setInterviewScheduleDay={setInterviewScheduleDay}
            />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
        </>
      );
    if (nowStatus === SECOND_ANNOUNCEMENT)
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <SecondMonthSelect
              date={date}
              setSecondScheduleMonth={setSecondScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <SecondDaySelect
              date={date}
              setSecondScheduleDay={setSecondScheduleDay}
            />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
        </>
      );
  };

  return (
    <S.ScheduleContent>
      <S.ScheduleContentBox>
        <S.ScheduleTitle>{scheduleName}</S.ScheduleTitle>
        <S.ScheduleImg>
          <img src={scheduleImg} alt={scheduleImgAlt} />
        </S.ScheduleImg>
        <S.ScheduleDate>
          <S.ScheduleDateBody>{selectDateType()}</S.ScheduleDateBody>
        </S.ScheduleDate>
      </S.ScheduleContentBox>
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
