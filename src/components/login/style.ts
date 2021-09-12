import styled from 'styled-components';

import { background } from "../../assets/login";
import { color, pxToRem } from '../../styles/index';

export const LoginContent = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;
  > img {
    width: 100px;
    height: 30px;
    margin-bottom: 20px;
  }

  > h1 {
    font-size: 64px;
    margin-bottom: 80px;
  }

  > p {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 40px;

    &.failed {
      color: #ff5c5c;
    }
  }
`;

export const LoginBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  min-height: ${pxToRem(900)}rem;
  overflow: hidden;
  position: fixed;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 111.5%;
  z-index: -100;
  @media (max-width: 1320px) {
    width: ${pxToRem(1320)}rem;
  }

  > h2 {
    font-size: 64px;
    margin-top: -20%;
  }

  > h3 {
    font-size: 28px;
    font-weight: 300;
    margin-top: 67px;
    line-height: 2;
  }
`;

export const LoginContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LoginContentTitle = styled.div`
  width: 30%;
`;

export const LoginContentTitleHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 12px;

  h1 {
    font-size: 64px;
    font-weight: bold;
    font-family: 'Noto Sans KR-Bold', sans-serif !important;
  }
`;

export const LoginContentTitleBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${pxToRem(64)}rem;

  p {
    margin-top: 8px;
    font-weight: bold;
    color: ${color.darkBorderColor}
  }
`;

export const LoginContentSign = styled.div`
    width: 40%;
    padding-top: 10px;
`;

export const LoginContentSignLogo = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 1.25rem;

  > img {
    width: 80px;
    margin-right: 10px;
  }

  > span {
    margin-left: 10px;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Noto Sans KR-Bold', sans-serif !important;
    color: ${color.loginFailedText}
  }

  > span:hover {
    cursor: default;
    
  }
`;

export const LoginContentSignInput = styled.div`
  width: 80%;
  height: 100%;
`;

export const LoginInputId = styled.input`
  width: 100%;
  height: 54px;
  box-sizing: border-box;
  padding: 0 28px;
  border-radius: 5px;
  border: 1.4px solid #606060;
  background-color: ${color.backgorund};
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 24px;
`;

export const LoginInputPassword = styled.input`
  width: 72%;
  height: 54px;
  box-sizing: border-box;
  padding: 0 28px;
  font-size: 18px;
  font-weight: 500;
  color: #333333;
`;

export const LoginPasswordBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1.4px solid #606060;
  background-color: ${color.backgorund};
  margin-bottom: 20px;
`;

export const LoginPasswordDisplayIcon = styled.div`
  margin-right: 18px;
  &:hover {
    cursor: pointer;
  }

  > img {
    width: 20px;
    height: 20px;
    top: 49%;
    right: 19.4%;
  }
`;

export const LoginBtn = styled.button`
  width: 80%;
  height: 62px;
  border-radius: 5px;
  background-color: ${color.primaryColor};
  font-size: 22px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  color: #ffffff;
  margin-top: 40px;
`;
