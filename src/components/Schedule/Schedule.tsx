import React, { FC } from "react";
import * as S from "./style";
import {
  application_icon,
  interview_icon,
  presentation_regiester_icon,
  presentation_icon,
} from "../../assets/schedule";
import { Button } from "../Common";
import ScheduleContent from "./content";
// import {
//   scheduleProcessType,
//   startDateType,
//   endDateType,
// } from "../../data/modules/redux/reducer/schedule/interface";
import {
  scheduleType,
  START_DATE,
  END_DATE,
  FIRST_ANNOUNCEMENT,
  SECOND_ANNOUNCEMENT,
  INTERVIEW,
  NOT_APPLICATION_PERIOD,
  BEFORE_FIRST_ANNOUNCEMENT,
  BEFORE_SECOND_ANNOUNCEMENT,
  BEFORE_INTERVIEW,
} from "../../data/modules/redux/reducer/schedule/scheduleConstance";
// import { useSchedule } from "../../hooks/schedule";

interface Props {
  // status: scheduleType;
  // date: startDateType | endDateType;
  // process: scheduleProcessType;
  // type: string;
  // scheduleTimeType: startDateType | endDateType;
}

const Schedule: FC<Props> = (
  {
    // status,
    // process,
    // date,
    // type,
    // scheduleTimeType,
  }
) => {
  // const {
  // state: { updateScheduleStatusStatus },
  // updateScheduleStatus,
  // } = useSchedule();

  // const handleClickCheckBox = async (type: string, status: string) => {};

  return (
    <S.Schedule>
      <S.ScheduleWrapper>
        <S.ScheduleContentsBox>
          <ScheduleContent
            // {...process}
            // nowStatus={status === START_DATE}
            // date={date}
            scheduleImg={application_icon}
            scheduleImgAlt="application_icon"
          />
          <ScheduleContent
            // {...process}
            // nowStatus={status === FIRST_ANNOUNCEMENT}
            // date={date}
            scheduleImg={presentation_icon}
            scheduleImgAlt="1-presentation_icon"
          />
          <ScheduleContent
            // {...process}
            // nowStatus={status === INTERVIEW}
            // date={date}
            scheduleImg={interview_icon}
            scheduleImgAlt="interview_icon"
          />
          <ScheduleContent
            // {...process}
            // nowStatus={status === SECOND_ANNOUNCEMENT}
            // date={date}
            scheduleImg={presentation_regiester_icon}
            scheduleImgAlt="presentation_regiester_icon"
          />
        </S.ScheduleContentsBox>
        <S.ScheduleButtonBox>
          <Button
            className="schedule__fix-btn"
            // onClick={() => handleClickCheckBox}
          >
            일정 수정
          </Button>
        </S.ScheduleButtonBox>
      </S.ScheduleWrapper>
    </S.Schedule>
  );
};

export default Schedule;
