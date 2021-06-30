import React, { FC } from "react";
import * as S from "../style";
import ScheduleSelect from "./scheduleSelect";
import {
  startDateType,
  endDateType,
} from "../../../data/modules/redux/reducer/schedule/interface";

interface Props {
  // title: string | React.ReactNode;
  // date: startDateType | endDateType;
  // nowStatus: boolean;
  scheduleImg: string;
  scheduleImgAlt: string;
}

const ScheduleContent: FC<Props> = ({
  // title,
  // date,
  // nowStatus,
  scheduleImg,
  scheduleImgAlt,
}) => {
  return (
    <S.ScheduleContent>
      <S.ScheduleContentBox>
        <S.ScheduleTitle>{/* {title} */}</S.ScheduleTitle>
        <S.ScheduleImg>
          <img src={scheduleImg} alt={scheduleImgAlt} />
        </S.ScheduleImg>
        <S.ScheduleDate>
          <S.ScheduleDateBody>
            <ScheduleSelect scheduleImgAlt={scheduleImgAlt} />
          </S.ScheduleDateBody>
        </S.ScheduleDate>
      </S.ScheduleContentBox>
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
