import styled from 'styled-components';
import { color, pxToRem } from '../../styles';

export const Schedule = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: ${pxToRem(1320)}rem;
  box-sizing: border-box;
`;

export const ScheduleWrapper = styled.div`
  height: 100%;
  padding: 0px ${pxToRem(160)}rem;
  padding-top: ${pxToRem(192)}rem;
`;

export const ScheduleContentsBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: ${pxToRem(55)}rem;
`;

export const ScheduleButtonBox = styled.div`
    display: flex;
    justify-content: center;

    & > Button {
        border: 1px solid ${color.primaryColor};
        background-color: ${color.primaryColor};
    }
`;

export const ScheduleContent = styled.div`
  border: 1px solid black;
`;

export const ScheduleContentBox = styled.div`
  padding: 0 ${pxToRem(40)}rem;   
`;

export const ScheduleTitle = styled.div`

`;

export const ScheduleImg = styled.div`
    & > img {
        width: 80px;
    }
`;

export const ScheduleDate = styled.div`

`;

export const ScheduleDateTitle = styled.div`

`;

export const ScheduleDateSelectBox = styled.div`

`;

export const ScheduleDateSelect = styled.div`

`;

