import styled from "styled-components";
import {color} from "../../styles";

export const Applicant = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #fcfcfc;
  box-sizing: border-box;
  padding-top: 60px;
`;

export const ApplicantContainer = styled.div`
  flex: 4;
  border-right: solid ${color.darkBorderColor} 1px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ApplicantInfoWrap = styled.div`
  flex: 3;
`;