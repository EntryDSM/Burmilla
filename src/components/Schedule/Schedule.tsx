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

const Schedule: FC = () => {
  const fixScheduleClickHandler = () => {};

  return (
    <S.Schedule>
      <S.ScheduleWrapper>
        <S.ScheduleContentsBox>
          <ScheduleContent
            scheduleName="원서 작성"
            scheduleImg={application_icon}
            scheduleImgAlt="application_icon"
          />
          <ScheduleContent
            scheduleName="1차 발표"
            scheduleImg={presentation_icon}
            scheduleImgAlt="1-presentation_icon"
          />
          <ScheduleContent
            scheduleName="면접"
            scheduleImg={interview_icon}
            scheduleImgAlt="interview_icon"
          />
          <ScheduleContent
            scheduleName="발표 및 등록"
            scheduleImg={presentation_regiester_icon}
            scheduleImgAlt="presentation_regiester_icon"
          />
        </S.ScheduleContentsBox>
        <S.ScheduleButtonBox>
          <Button
            className="schedule__fix-btn"
            onClick={fixScheduleClickHandler}
          >
            일정 수정
          </Button>
        </S.ScheduleButtonBox>
      </S.ScheduleWrapper>
    </S.Schedule>
  );
};

export default Schedule;
