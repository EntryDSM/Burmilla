import React, { FC } from "react";
import * as S from "../style";

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
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <S.ScheduleDateSelect></S.ScheduleDateSelect>
            <S.ScheduleDateSelect></S.ScheduleDateSelect>
          </S.ScheduleDateSelectBox>
        </S.ScheduleDate>
      </S.ScheduleContentBox>
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
