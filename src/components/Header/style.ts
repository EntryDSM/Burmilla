import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, pxToRem } from '../../styles/index';


export const HeaderWrapper = styled.header`
  width: 100%;
  min-width: ${pxToRem(1320)}rem;
  height: 60px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.12);
  padding: 0 260px;
  box-sizing: border-box;
  background: white;
  position: absolute;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  width: 15%;
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
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
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
  &:nth-child(1) {
    width: 8%;
  }
  &:nth-child(3) {
    width: 21%;
  }
`;

export const HeaderItem = styled(Link)`
    width: 100%;
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
      width: 1.8%;
      height: 1.5px;
      visibility: visible;
      align-self: flex-start;
    }
    &:hover > .total {
      width: 4%;
      height: 1.5px;
      visibility: visible;
      align-self: flex-start;
    }
    &:hover > .applicant {
      width: 4.9%;
      height: 1.5px;
      visibility: visible;
      align-self: flex-start;
    }
`;
