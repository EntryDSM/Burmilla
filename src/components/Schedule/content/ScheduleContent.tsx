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
  const scheduleSelectBox = () => {
    return (
      <S.ScheduleSelect>
        <S.ScheduleDateSelect>
          <S.ScheduleSelectOptions>1</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>2</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>3</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>4</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>5</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>6</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>7</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>8</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>9</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>10</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>11</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>12</S.ScheduleSelectOptions>
        </S.ScheduleDateSelect>
        <span>월</span>
        <S.ScheduleDateSelect>
          <S.ScheduleSelectOptions>1</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>2</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>3</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>4</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>5</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>6</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>7</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>8</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>9</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>10</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>11</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>12</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>13</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>14</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>15</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>16</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>17</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>18</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>19</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>20</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>21</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>22</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>23</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>24</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>25</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>26</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>27</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>28</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>29</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>30</S.ScheduleSelectOptions>
          <S.ScheduleSelectOptions>31</S.ScheduleSelectOptions>
        </S.ScheduleDateSelect>
        <span>일</span>
      </S.ScheduleSelect>
    );
  };
  const dateSelectOption = () => {
    if (scheduleName === "원서 작성") {
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          {scheduleSelectBox()}
          <S.ScheduleDateTitle>마감일</S.ScheduleDateTitle>
          {scheduleSelectBox()}
        </>
      );
    } else {
      return (
        <>
          <S.ScheduleDateTitle className="scheduleSelectBox-tail">
            시작일
          </S.ScheduleDateTitle>
          {scheduleSelectBox()}
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
          <S.ScheduleDateSelectBox>
            {dateSelectOption()}
          </S.ScheduleDateSelectBox>
        </S.ScheduleDate>
      </S.ScheduleContentBox>
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
