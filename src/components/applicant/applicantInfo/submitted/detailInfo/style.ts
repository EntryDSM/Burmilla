import styled from 'styled-components';

export const DetailInfoTable = styled.table`
  width: 100%;
  min-width: 30rem;
  height: 250px;
  margin-top: 16px;
  border-collapse: collapse;

  th,
  td {
    border: 1.4px solid #f0f0f0;
  }
  th {
    text-align: center;
    font-weight: normal;
    width: 85px;
    font-size: 12px;
    font-family: 'Noto Sans KR', sans-serif !important;
    font-weight: bold;

    &:first-child {
      border-left: 0;
      width: 85px;
      height: 33px;
    }
  }
  td {
    text-align: left;
    padding-left: 20px;
    font-weight: bold;
    font-size: 13px;

    &:first-child {
      width: 35%;
    }

    &:last-child {
      border-right: 0;
    }
  }
  div > span {
    font-size: 12px;

    &:last-child {
      margin-left: 32px;
    }
  }
`;

export const QualificationexamDetailInfoTable = styled.table`
  width: 100%;
  min-width: 30rem;
  height: 250px;
  margin-top: 16px;
  border-collapse: collapse;

  th,
  td {
    border: 1.4px solid #f0f0f0;
  }
  th {
    text-align: center;
    font-weight: normal;
    width: 150px;
    font-size: 12px;
    font-family: 'Noto Sans KR', sans-serif !important;
    font-weight: bold;
    border-left: 0;
  }
  td {
    text-align: left;
    padding-left: 50px;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif !important;
    font-size: 13px;
    border-right: 0;
  }
  div > span {
    font-size: 12px;

    &:last-child {
      margin-left: 32px;
    }
  }
`;
