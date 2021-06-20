import React, { FC } from "react";
import * as S from "../style";
import { monthDate, dayDate } from "./scheduleConstance";
import { select_off, select_on } from "../../../assets/schedule";

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
  const [isMouseHover, setIsMouseHover] = React.useState<Number>(0);
  const [isSelectApplicationMonthNumber, setIsSelectApplicationMonthNumber] =
    React.useState<String>("1");
  const [isSelectApplicationDayNumber, setIsSelectApplicationDayNumber] =
    React.useState<String>("1");

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
  const onMouseOverHandle = (event) => {
    setIsMouseHover(Number(event.currentTarget.dataset.id));
  };
  const onMouseLeaverHandle = () => {
    setIsMouseHover(0);
  };
  const onClickSelectTitleName = (prop) => {
    switch (Number(prop.currentTarget.dataset.id)) {
      case 1:
        setIsSelectApplicationMonthNumber(prop.target.innerHTML);
        break;
      case 2:
        setIsSelectApplicationDayNumber(prop.target.innerHTML);
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      default:
        break;
    }
  };
  const dateSelectOption = () => {
    if (scheduleName === "원서 작성") {
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect
                data-id={1}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 1 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationMonthNumber}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationMonthNumber}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_off} />
                  </S.ScheduleSelectTitleBox>
                )}
                <S.ScheduleSelectContentBox>
                  <S.ScheduleSelectMiddleBar>
                    <div />
                  </S.ScheduleSelectMiddleBar>
                  <S.ScheduleSelectContent>
                    {monthDatas &&
                      monthDatas.map((months) => {
                        return (
                          <p
                            data-type={"START_DATE"}
                            data-id={1}
                            onClick={onClickSelectTitleName}
                          >
                            {months.month}
                          </p>
                        );
                      })}
                  </S.ScheduleSelectContent>
                </S.ScheduleSelectContentBox>
              </S.ScheduleDateSelect>
              <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            </S.ScheduleSelect>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect
                data-id={2}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 2 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationDayNumber}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationDayNumber}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_off} />
                  </S.ScheduleSelectTitleBox>
                )}
                <S.ScheduleSelectContentBox>
                  <S.ScheduleSelectMiddleBar>
                    <div />
                  </S.ScheduleSelectMiddleBar>
                  <S.ScheduleSelectContent>
                    {dayDatas &&
                      dayDatas.map((days) => {
                        return (
                          <p
                            data-type={"START_DATE"}
                            data-id={2}
                            onClick={onClickSelectTitleName}
                          >
                            {days.day}
                          </p>
                        );
                      })}
                  </S.ScheduleSelectContent>
                </S.ScheduleSelectContentBox>
              </S.ScheduleDateSelect>
              <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
            </S.ScheduleSelect>
          </S.ScheduleDateSelectBox>
          <S.ScheduleDateTitle className="dead-line">
            마감일
          </S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect
                data-id={3}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 3 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationMonthNumber}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationMonthNumber}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_off} />
                  </S.ScheduleSelectTitleBox>
                )}
                <S.ScheduleSelectContentBox>
                  <S.ScheduleSelectMiddleBar>
                    <div />
                  </S.ScheduleSelectMiddleBar>
                  <S.ScheduleSelectContent>
                    {monthDatas &&
                      monthDatas.map((months) => {
                        return (
                          <p
                            data-type={"START_DATE"}
                            data-id={1}
                            onClick={onClickSelectTitleName}
                          >
                            {months.month}
                          </p>
                        );
                      })}
                  </S.ScheduleSelectContent>
                </S.ScheduleSelectContentBox>
              </S.ScheduleDateSelect>
              <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            </S.ScheduleSelect>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect
                data-id={4}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 4 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationDayNumber}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationDayNumber}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_off} />
                  </S.ScheduleSelectTitleBox>
                )}
                <S.ScheduleSelectContentBox>
                  <S.ScheduleSelectMiddleBar>
                    <div />
                  </S.ScheduleSelectMiddleBar>
                  <S.ScheduleSelectContent>
                    {dayDatas &&
                      dayDatas.map((days) => {
                        return (
                          <p
                            data-type={"START_DATE"}
                            data-id={2}
                            onClick={onClickSelectTitleName}
                          >
                            {days.day}
                          </p>
                        );
                      })}
                  </S.ScheduleSelectContent>
                </S.ScheduleSelectContentBox>
              </S.ScheduleDateSelect>
              <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
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
          {/* <S.ScheduleDateSelectBox>
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
          </S.ScheduleDateSelectBox> */}
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
