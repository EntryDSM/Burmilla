import styled, { css } from 'styled-components';
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
        background-image: linear-gradient(91deg, #ff8888 1%, #f57278 100%);
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
  width: 100%;
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

export const ScheduleSelectDivision = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: ${color.primaryTextColor};
`;

export const Select = styled.div<{
  disabled: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ disabled }) => css`
    width: 36%;
    border: 1px solid ${disabled === 'disabled' ? color.disable : 'black'};
    color: ${disabled === 'disabled' ? color.disable : 'black'};
    background-color: ${disabled === 'block' ? '#f1f1f1' : '#ffffff'};
  `}
  height: 38px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.5rem 0.7rem;
  position: relative;
  cursor: pointer;
`;

export const SelectContent = styled.div<{
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    font-size: 18px;
    font-weight: bold;
  }
  > img {
    margin-top: 3px;
    width: 11px;
  }
`;

export const SubSelect = styled.div`
  position: absolute;
  min-width: 100%;
  height: 200px;
  background: ${color.backgorund};
  border: 1px solid #606060;
  border-radius: 0 0 4px 4px;
  border-top: none;
  cursor: pointer;
  z-index: 10;
  left: -1px;
  top: 90%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
  > p {
    height: 24px;
    font-size: 16px;
    font-weight: 300;
    margin-left: 11px;
    margin-bottom: 6px;
    color: black;
    cursor: pointer;
  }
  > p:hover {
    color: ${color.sub};
    font-weight: 500;
  }
`;

export const GrayLine = styled.div<{
  width: number;
}>`
  ${({ width }) => css`
    width: ${width}px;
  `}
  border: 0.1px solid ${color.middleBar};
  background: ${color.middleBar};
  height: 0px;
  margin: 8px auto 10px auto;
`;