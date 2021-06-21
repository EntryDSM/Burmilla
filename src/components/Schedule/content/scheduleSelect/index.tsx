import React, { FC } from "react";
import * as S from "../../style";
import { monthDate, dayDate } from "../scheduleConstance";
import { select_off, select_on } from "../../../../assets/schedule";

interface Props {
  scheduleName: string;
}

const ScheduleSelect: FC<Props> = ({ scheduleName }) => {
  const [monthDatas, setMonthDatas] = React.useState([]);
  const [dayDatas, setDayDatas] = React.useState([]);
  const [isMouseHover, setIsMouseHover] = React.useState<Number>(0);
  const [isSelectApplicationMonth, setIsSelectApplicationMonth] =
    React.useState<String>("1");
  const [isSelectApplicationDay, setIsSelectApplicationDay] =
    React.useState<String>("1");
  const [
    isSelectApplicationDeadLineMonth,
    setIsSelectApplicationDeadLineMonth,
  ] = React.useState<String>("1");
  const [isSelectApplicationDeadLineDay, setIsSelectApplicationDeadLineDay] =
    React.useState<String>("1");
  const [isSelectFirstAnnouncementMonth, setIsSelectFirstAnnouncementMonth] =
    React.useState<String>("1");
  const [isSelectFirstAnnouncementDay, setIsSelectFirstAnnouncementDay] =
    React.useState<String>("1");
  const [isSelectInterviewMonth, setIsSelectInterviewMonth] =
    React.useState<String>("1");
  const [isSelectInterviewDay, setIsSelectInterviewDay] =
    React.useState<String>("1");
  const [isSelectSecondAnnouncementMonth, setIsSelectSecondAnnouncementMonth] =
    React.useState<String>("1");
  const [isSelectSecondAnnouncementDay, setIsSelectSecondAnnouncementDay] =
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
        setIsSelectApplicationMonth(prop.target.innerHTML);
        break;
      case 2:
        setIsSelectApplicationDay(prop.target.innerHTML);
        break;
      case 3:
        setIsSelectApplicationDeadLineMonth(prop.target.innerHTML);
        break;
      case 4:
        setIsSelectApplicationDeadLineDay(prop.target.innerHTML);
        break;
      case 5:
        setIsSelectFirstAnnouncementMonth(prop.target.innerHTML);
        break;
      case 6:
        setIsSelectFirstAnnouncementDay(prop.target.innerHTML);
        break;
      case 7:
        setIsSelectInterviewMonth(prop.target.innerHTML);
        break;
      case 8:
        setIsSelectInterviewDay(prop.target.innerHTML);
        break;
      case 9:
        setIsSelectSecondAnnouncementMonth(prop.target.innerHTML);
        break;
      case 10:
        setIsSelectSecondAnnouncementDay(prop.target.innerHTML);
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
                      {isSelectApplicationMonth}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationMonth}
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
                          <p data-id={1} onClick={onClickSelectTitleName}>
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
                      {isSelectApplicationDay}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationDay}
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
                          <p data-id={2} onClick={onClickSelectTitleName}>
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
                      {isSelectApplicationDeadLineMonth}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationDeadLineMonth}
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
                          <p data-id={3} onClick={onClickSelectTitleName}>
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
                      {isSelectApplicationDeadLineDay}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectApplicationDeadLineDay}
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
                          <p data-id={4} onClick={onClickSelectTitleName}>
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
    } else if (scheduleName === "1차 발표") {
      return (
        <>
          <S.ScheduleDateTitle className="scheduleSelectBox-tail">
            시작일
          </S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect
                data-id={5}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 5 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectFirstAnnouncementMonth}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectFirstAnnouncementMonth}
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
                          <p data-id={5} onClick={onClickSelectTitleName}>
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
                data-id={6}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 6 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectFirstAnnouncementDay}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectFirstAnnouncementDay}
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
                          <p data-id={6} onClick={onClickSelectTitleName}>
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
    } else if (scheduleName === "면접") {
      return (
        <>
          <S.ScheduleDateTitle className="scheduleSelectBox-tail">
            시작일
          </S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect
                data-id={7}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 7 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectInterviewMonth}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectInterviewMonth}
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
                          <p data-id={7} onClick={onClickSelectTitleName}>
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
                data-id={8}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 8 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectInterviewDay}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectInterviewDay}
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
                          <p data-id={8} onClick={onClickSelectTitleName}>
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
          <S.ScheduleDateSelectBox>
            <S.ScheduleSelect>
              <S.ScheduleDateSelect
                data-id={9}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 9 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectSecondAnnouncementMonth}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectSecondAnnouncementMonth}
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
                          <p data-id={9} onClick={onClickSelectTitleName}>
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
                data-id={10}
                onMouseOver={onMouseOverHandle}
                onMouseLeave={onMouseLeaverHandle}
              >
                {isMouseHover === 10 ? (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectSecondAnnouncementDay}
                    </S.ScheduleSelectTitle>
                    <S.ScheduleSelectTitleImg src={select_on} />
                  </S.ScheduleSelectTitleBox>
                ) : (
                  <S.ScheduleSelectTitleBox>
                    <S.ScheduleSelectTitle>
                      {isSelectSecondAnnouncementDay}
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
                          <p data-id={10} onClick={onClickSelectTitleName}>
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
    }
  };

  return dateSelectOption();
};

export default ScheduleSelect;
