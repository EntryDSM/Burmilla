import React, { FC } from "react";
import * as S from "./style";
import {
  application_icon,
  interview_icon,
  presentation_regiester_icon,
  presentation_icon,
} from "../../assets/schedule";
import { Button } from "../common";
import {
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  SECOND_ANNOUNCEMENT,
  START_DATE,
} from "../../data/modules/redux/reducer/schedule/scheduleConstance";
import { scheduleUpdateTypes } from "../../data/modules/redux/reducer/schedule/interface";
import ScheduleContent from "./content";

interface Props {
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
  startScheduleDate: string;
  endScheduleDate: string;
  firstScheduleDate: string;
  interviewScheduleDate: string;
  secondScheduleDate: string;
  scheduleDate: Array<scheduleUpdateTypes>;
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
  setSchedule: (payload: { schedules: Array<scheduleUpdateTypes> }) => void;
}

const Schedule: FC<Props> = ({
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
  startScheduleDate,
  endScheduleDate,
  firstScheduleDate,
  interviewScheduleDate,
  secondScheduleDate,
  scheduleDate,
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
  setSchedule,
}) => {
  const handleClickCheckBox = async (e) => {
    if (window.confirm("일정을 수정하시겠습니까?")) {
      setSchedule({
        schedules: [
          {
            type: "START_DATE",
            date: startScheduleDate,
          },
          {
            type: "END_DATE",
            date: endScheduleDate,
          },
          {
            type: "FIRST_ANNOUNCEMENT",
            date: firstScheduleDate,
          },
          {
            type: "INTERVIEW",
            date: interviewScheduleDate,
          },
          {
            type: "SECOND_ANNOUNCEMENT",
            date: secondScheduleDate,
          },
        ],
      });
    }
  };

  return (
    <S.Schedule>
      <S.ScheduleWrapper>
        <S.ScheduleContentsBox>
          <ScheduleContent
            scheduleImg={application_icon}
            scheduleImgAlt="application_icon"
            scheduleName="원서 접수"
            nowStatus={START_DATE}
            startScheduleMonth={startScheduleMonth}
            startScheduleDay={startScheduleDay}
            endScheduleMonth={endScheduleMonth}
            endScheduleDay={endScheduleDay}
            firstScheduleMonth={firstScheduleMonth}
            firstScheduleDay={firstScheduleDay}
            interviewScheduleMonth={interviewScheduleMonth}
            interviewScheduleDay={interviewScheduleDay}
            secondScheduleMonth={secondScheduleMonth}
            secondScheduleDay={secondScheduleDay}
            scheduleDate={scheduleDate}
            setStartScheduleMonth={setStartScheduleMonth}
            setStartScheduleDay={setStartScheduleDay}
            setEndScheduleMonth={setEndScheduleMonth}
            setEndScheduleDay={setEndScheduleDay}
            setFirstScheduleMonth={setFirstScheduleMonth}
            setFirstScheduleDay={setFirstScheduleDay}
            setInterviewScheduleMonth={setInterviewScheduleMonth}
            setInterviewScheduleDay={setInterviewScheduleDay}
            setSecondScheduleMonth={setSecondScheduleMonth}
            setSecondScheduleDay={setSecondScheduleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setFirstDate={setFirstDate}
            setInterviewDate={setInterviewDate}
            setSecondDate={setSecondDate}
          />
          <ScheduleContent
            scheduleImg={presentation_icon}
            scheduleImgAlt="1-presentation_icon"
            scheduleName="1차 발표"
            nowStatus={FIRST_ANNOUNCEMENT}
            startScheduleMonth={startScheduleMonth}
            startScheduleDay={startScheduleDay}
            endScheduleMonth={endScheduleMonth}
            endScheduleDay={endScheduleDay}
            firstScheduleMonth={firstScheduleMonth}
            firstScheduleDay={firstScheduleDay}
            interviewScheduleMonth={interviewScheduleMonth}
            interviewScheduleDay={interviewScheduleDay}
            secondScheduleMonth={secondScheduleMonth}
            secondScheduleDay={secondScheduleDay}
            scheduleDate={scheduleDate}
            setStartScheduleMonth={setStartScheduleMonth}
            setStartScheduleDay={setStartScheduleDay}
            setEndScheduleMonth={setEndScheduleMonth}
            setEndScheduleDay={setEndScheduleDay}
            setFirstScheduleMonth={setFirstScheduleMonth}
            setFirstScheduleDay={setFirstScheduleDay}
            setInterviewScheduleMonth={setInterviewScheduleMonth}
            setInterviewScheduleDay={setInterviewScheduleDay}
            setSecondScheduleMonth={setSecondScheduleMonth}
            setSecondScheduleDay={setSecondScheduleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setFirstDate={setFirstDate}
            setInterviewDate={setInterviewDate}
            setSecondDate={setSecondDate}
          />
          <ScheduleContent
            scheduleImg={interview_icon}
            scheduleImgAlt="interview_icon"
            scheduleName="면접"
            nowStatus={INTERVIEW}
            startScheduleMonth={startScheduleMonth}
            startScheduleDay={startScheduleDay}
            endScheduleMonth={endScheduleMonth}
            endScheduleDay={endScheduleDay}
            firstScheduleMonth={firstScheduleMonth}
            firstScheduleDay={firstScheduleDay}
            interviewScheduleMonth={interviewScheduleMonth}
            interviewScheduleDay={interviewScheduleDay}
            secondScheduleMonth={secondScheduleMonth}
            secondScheduleDay={secondScheduleDay}
            scheduleDate={scheduleDate}
            setStartScheduleMonth={setStartScheduleMonth}
            setStartScheduleDay={setStartScheduleDay}
            setEndScheduleMonth={setEndScheduleMonth}
            setEndScheduleDay={setEndScheduleDay}
            setFirstScheduleMonth={setFirstScheduleMonth}
            setFirstScheduleDay={setFirstScheduleDay}
            setInterviewScheduleMonth={setInterviewScheduleMonth}
            setInterviewScheduleDay={setInterviewScheduleDay}
            setSecondScheduleMonth={setSecondScheduleMonth}
            setSecondScheduleDay={setSecondScheduleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setFirstDate={setFirstDate}
            setInterviewDate={setInterviewDate}
            setSecondDate={setSecondDate}
          />
          <ScheduleContent
            scheduleImg={presentation_regiester_icon}
            scheduleImgAlt="presentation_regiester_icon"
            scheduleName="발표 및 접수"
            nowStatus={SECOND_ANNOUNCEMENT}
            startScheduleMonth={startScheduleMonth}
            startScheduleDay={startScheduleDay}
            endScheduleMonth={endScheduleMonth}
            endScheduleDay={endScheduleDay}
            firstScheduleMonth={firstScheduleMonth}
            firstScheduleDay={firstScheduleDay}
            interviewScheduleMonth={interviewScheduleMonth}
            interviewScheduleDay={interviewScheduleDay}
            secondScheduleMonth={secondScheduleMonth}
            secondScheduleDay={secondScheduleDay}
            scheduleDate={scheduleDate}
            setStartScheduleMonth={setStartScheduleMonth}
            setStartScheduleDay={setStartScheduleDay}
            setEndScheduleMonth={setEndScheduleMonth}
            setEndScheduleDay={setEndScheduleDay}
            setFirstScheduleMonth={setFirstScheduleMonth}
            setFirstScheduleDay={setFirstScheduleDay}
            setInterviewScheduleMonth={setInterviewScheduleMonth}
            setInterviewScheduleDay={setInterviewScheduleDay}
            setSecondScheduleMonth={setSecondScheduleMonth}
            setSecondScheduleDay={setSecondScheduleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setFirstDate={setFirstDate}
            setInterviewDate={setInterviewDate}
            setSecondDate={setSecondDate}
          />
        </S.ScheduleContentsBox>
        <S.ScheduleButtonBox>
          <Button className="schedule__fix-btn" onClick={handleClickCheckBox}>
            일정 수정
          </Button>
        </S.ScheduleButtonBox>
      </S.ScheduleWrapper>
    </S.Schedule>
  );
};

export default Schedule;
