import React, { FC } from "react";
import * as S from "../style";
import ScheduleSelect from "./scheduleSelect";

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
  return (
    <S.ScheduleContent>
      <S.ScheduleContentBox>
        <S.ScheduleTitle>{scheduleName}</S.ScheduleTitle>
        <S.ScheduleImg>
          <img src={scheduleImg} alt={scheduleImgAlt} />
        </S.ScheduleImg>
        <S.ScheduleDate>
          <S.ScheduleDateBody>
            <ScheduleSelect scheduleName={scheduleName} />
          </S.ScheduleDateBody>
        </S.ScheduleDate>
      </S.ScheduleContentBox>
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
