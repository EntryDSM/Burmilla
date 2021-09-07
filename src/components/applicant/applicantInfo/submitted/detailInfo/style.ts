import styled from 'styled-components';

export const DetailInfoTable = styled.table`
  width: 100%;
  height: 250px;
  margin-top: 16px;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #e0e0e0;
  }
  th {
    text-align: center;
    font-weight: normal;
    width: 85px;
    font-size: 12px;
    font-weight: bold;

    &:first-child {
      border-left: 0;
      width: 70px;
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
