import styled from 'styled-components';
import { color, pxToRem, } from '../../styles';

export const Schedule = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: ${pxToRem(1320)}rem;
  box-sizing: border-box;
`;

export const ScheduleWrapper = styled.div`
  height: 100%;
  padding: 0px ${pxToRem(160)}rem;
  padding-top: ${pxToRem(160)}rem;
`;

export const ScheduleContentsBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: ${pxToRem(55)}rem;
`;

export const ScheduleButtonBox = styled.div`
    display: flex;
    justify-content: center;
    padding-top: ${pxToRem(30)}rem;

    & > Button {
        border: 1px solid ${color.primaryColor};
        background-color: ${color.primaryColor};
    }
`;

export const ScheduleContent = styled.div`
  border: 1px solid ${color.fail};
  border-radius: 10px;
  width: 225px;
  height: 350px;
`;

export const ScheduleContentBox = styled.div`
  padding: 0 ${pxToRem(20)}rem;   
  height: 100%;
`;

export const ScheduleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(25)}rem 1rem;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  font-size: 14px;
  color: ${color.primaryTextColor};
`;

export const ScheduleImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
    & > img {
      width: 90px;
      height: 91px;
    }
`;

export const ScheduleDate = styled.div`
  padding-top: 2.5rem;
`;

export const ScheduleDateTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${color.primaryTextColor};
  padding-bottom: 8px;

  &.scheduleSelectBox-tail {
    padding-top: ${pxToRem(20)}rem;
  }
  &.dead-line {
    padding: 8px 0;
  }
`;

export const ScheduleDateBody = styled.div`

`;

export const ScheduleDateSelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const ScheduleSelect = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ScheduleDateSelect = styled.div`
  position: relative;
  width: 42px;
  border: 1px solid #606060;
  border-radius: 4px;
  background: ${color.backgorund};
  padding: 0.2rem 0.7rem;

  &:hover {
    cursor: pointer;
  }
  &:hover > div ~ div {
    visibility: visible;
    height: ${({height}:any) => (height ? height : "156")}px;
  }
  & > div ~ div {
    visibility: hidden;
    height: 3px;
  }
`;

export const ScheduleSelectTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ScheduleSelectTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ScheduleSelectTitleImg = styled.img`
  width: 11px;
  margin-top: 2px;
`;

export const ScheduleSelectContentBox = styled.div`
  position: absolute;
  min-width: 100%;
  transition: all 0.3s;
  background: ${color.backgorund};
  border: 1px solid #606060;
  border-radius: 0 0 4px 4px;
  border-top: none;
  cursor: pointer;
  z-index: 1;
  left: -1px;
  top: 90%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const ScheduleSelectMiddleBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  
  > div {
    border: 0.1px solid ${color.middleBar};
    background: ${color.middleBar};
    height: 0px;
    width: 46px;
  }
`;

export const ScheduleSelectContent = styled.div`
  font-size: 14px;
  color: ${color.primaryTextColor};
  padding: 0.3rem 0.7rem;

  > p {
    transition: 0.2s;
    margin-bottom: ${pxToRem(4)}rem;

    &:hover {
      transition: 0.2s;
      color: ${color.primaryColor}
    }
  }
`;

export const ScheduleSelectDivision = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: ${color.primaryTextColor};
  margin-left: ${pxToRem(6)}rem;
`;
