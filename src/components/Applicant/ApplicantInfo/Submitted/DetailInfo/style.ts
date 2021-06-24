import styled from 'styled-components';

export const DetailInfoTable = styled.table`
  width: 100%;
  height: 250px;
  margin-top: 16px;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ededed;
  }
  th {
    text-align: center;
    font-weight: normal;
    width: 120px;
    font-size: 12px;

    &:first-child {
      border-left: 0;
    }
  }
  td {
    text-align: left;
    padding-left: 20px;
    font-weight: 300;
    font-size: 14px;

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
