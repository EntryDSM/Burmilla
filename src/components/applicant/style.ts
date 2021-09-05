import styled from "styled-components";
import { color, pxToRem } from "../../styles";

export const Applicant = styled.div`
  width: 80%;
  min-width: ${pxToRem(1136)}rem;
  min-height: 100vh;
  display: flex;
  background: ${color.backgorund};
  box-sizing: border-box;
  padding-top: 75px;
  margin: 0 auto;
`;

export const ApplicantContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 8%;
`;

export const ApplicantInfoWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid black;
  width: 40%;
  height: 100%;
  z-index: 1;
`;