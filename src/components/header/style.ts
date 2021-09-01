import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, pxToRem } from '../../styles/index';


export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.12);
  min-width: auto;
  position: absolute;
  top: 0;
  min-width: 1340px;
  z-index: 3;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderLogo = styled.div`
  min-width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  width: 93px;
  height: 29px;
`;

export const HeaderButton = styled.div`
  min-width: 25%;
  height: 100%;
  display: flex;
  align-items: center;

  @media ( max-width: 1380px ) {
    min-width: 27%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const HeaderItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeaderLogoutBox = styled.div`
  width: 16%;
  display: flex;
  justify-content: center;

  > Button {
    color: ${color.primaryTextColor};
    font-weight: bold;
    font-size: 15px;
  }
`;

export const HeaderItemBox = styled.div`
  width: 17%;
  text-align: center;
  &:nth-child(1) {
    width: 8%;
    text-align: center;
  }
  &:nth-child(3) {
    width: 21%;
    text-align: center;
  }
`;

export const HeaderItem = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${color.primaryTextColor};
  font-weight: bold;
  font-size: 15px;

    &:hover {
      font-family: 'Noto Sans KR-Bold', sans-serif !important;
      font-size: 14px;
    }
    > div {
      height: 1.5px;
      width: 1px;
      visibility: hidden;
      position: absolute;
      background-color: ${color.primaryColor};
      transition: all 0.3s;
    }
    &:hover > .schedule {
      width: 100%;
      height: 1.5px;
      visibility: visible;
      align-self: flex-start;
    }
    &:hover > .total {
      width: 100%;
      height: 1.5px;
      visibility: visible;
      align-self: flex-start;
    }
    &:hover > .applicant {
      width: 100%;
      height: 1.5px;
      visibility: visible;
      align-self: flex-start;
    }
`;
