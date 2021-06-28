import styled from 'styled-components';

import { color, pxToRem } from '../../../../styles';

export const SearchBarWrapper = styled.div`
  width: 95%;
  top: 18%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  z-index: 1;
  margin: 0 2.5%;
`;

export const CategoryDropdownClosed = styled.div`
  width: 100px;
  height: 35px;
  border: solid ${color.primaryTextColor} 1px;
  background: white;
  border-radius: 4px;
  display: inline-flex;
  box-sizing: border-box;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;

  > img {
    width: 12px;
    height: 12px;
  }
`;

export const CategoryDropdownOpened = styled.ul`
  width: 100px;
  border: solid ${color.primaryTextColor} 1px;
  background: white;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;

  > li:first-child {
    width: 78px;
    height: 36px;
    justify-content: space-between;
    font-size: 13px;
    font-weight: bold;
    border-bottom: solid 1px #dadada;
    margin-bottom: 5px;
    padding: 0 2px;

    > img {
      width: 12px;
      height: 12px;
    }

    &:hover {
      background: white;
    }
  }

  > li {
    width: 100%;
    height: 24px;
    padding: 0 12px 5px 12px;
    font-size: 13px;
    font-weight: bold;
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: ${color.lightPrimaryColor};
    }
  }
`;

export const SearchInputContainer = styled.div`
  width: ${pxToRem(520)}rem;
  height: 35px;
  box-sizing: border-box;
  border: solid ${color.darkBorderColor} 1px;
  border-radius: 4px;
  padding: 10px 18px;
  margin-left: ${pxToRem(34)}rem;
  display: inline-flex;
  align-items: center;
  background: white;

  > img {
    width: 14px;
    height: 14px;
    display: inline-block;
  }

  > input {
    width: 100%;
    font-size: 13px;
    display: inline-block;
  }
`;
