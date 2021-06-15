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
`;

export const ScheduleDateSelectBox = styled.div`
  
`;

export const ScheduleSelect = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
    
  & > span {
    margin: 0 14px 0 5px;
  }
`;

export const ScheduleDateSelect = styled.select`
  appearance: none;
  width: 60px;
  height: 30px;
`;

export const ScheduleSelectOptions = styled.option`

`;



