import styled from 'styled-components';

import { color } from '../../../../styles';

export const SearchBarWrapper = styled.div`
  width: 88%;
  top: 18%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
`;

export const CategoryDropdownClosed = styled.div`
  width: 114px;
  height: 35px;
  border: solid ${color.primaryColor} 1px;
  background: white;
  border-radius: 4px;
  display: inline-flex;
  box-sizing: border-box;
  padding: 10px 18px;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;

  > img {
    width: 16px;
    height: 16px;
  }
`;

export const CategoryDropdownOpened = styled.ul`
  width: 114px;
  border: solid ${color.primaryColor} 1px;
  background: white;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;

  > li:first-child {
    width: 78px;
    height: 35px;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: solid 1px #dadada;
    margin-bottom: 5px;
    padding: 0;

    > img {
      width: 16px;
      height: 16px;
    }

    &:hover {
      background: white;
    }
  }

  > li {
    width: 100%;
    height: 24px;
    padding: 0 18px;
    font-size: 12px;
    font-weight: 300;
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
  width: 70%;
  height: 35px;
  box-sizing: border-box;
  border: solid ${color.darkBorderColor} 1px;
  border-radius: 4px;
  padding: 10px 18px;
  display: inline-flex;
  align-items: center;
  background: white;

  > img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    display: inline-block;
  }

  > input {
    width: 100%;
    font-size: 12px;
    display: inline-block;
  }
`;
