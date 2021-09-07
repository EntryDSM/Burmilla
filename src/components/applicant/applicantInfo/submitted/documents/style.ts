import styled from 'styled-components';
import { color } from '../../../../../styles';

export const Wrapper = styled.div`
  margin-top: 34px;
`;

export const ContentSelector = styled.div`
  border-bottom: solid 1px ${color.primaryColor};
  > span {
    width: 85px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 10px 0 2.5px 0px;
    display: inline-block;
    position: relative;
    cursor: pointer;

    &.selected {
      font-family: 'Noto Sans KR-Medium', sans-serif !important;
    }
    
    > div {
      height: 3.5px;
      width: 1px;
      border-radius: 4px 4px 0px 0px;
      visibility: hidden;
      position: absolute;
      background-color: ${color.primaryColor};
      /* transition: */

      &.selected {
        width: 100%;
        visibility: visible;
      }
    }
  }
  > span:last-child {
    margin-left: 12px;
  }
`;

export const Document = styled.div`
  height: 125px;
  overflow-y: scroll;
  font-weight: 300;
  font-size: 14px;
  font-weight: bold;
  line-height: 2.25;
  margin-top: 8px;
  padding: 0px 4px;

  &::-webkit-scrollbar {
		width: 6px;
		background: none;
	}
	&::-webkit-scrollbar-thumb {
	  background: ${color.primaryColor};
    border-radius: 6px;
	}
	&::-webkit-scrollbar-track {
	  background: none;
	}
`;
