import styled from 'styled-components';

import { color } from '../../../styles/index';

export const ApplicantsList = styled.table`
  width: 100%;
  max-height: 45%;
  border: none;
  text-align: center;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const ListHeader = styled.thead`
  background: ${color.light};
  line-height: 2.8;
`;

export const TH = styled.th`
  width: 14%;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Medium', sans-serif !important;
  color: ${color.darkBorderColor};
  border-top: 1.5px solid #303030;
  border-bottom: 0.8px solid #d3d3d3;

  &:first-child {
    width: 16%;
  }
`;

export const TR = styled.tr<{ isSelected: boolean }>`
  line-height: 2.8;
  cursor: pointer;
  border-bottom: 0.8px solid ${({ isSelected }) => (isSelected ? color.primaryColor : '#d3d3d3')};
  background-color: ${({ isSelected }) => (isSelected ? '#fffafa' : 'white')};

  &:last-child {
    border-bottom: 1.5px solid #303030;
  }
`;

export const TD = styled.td`
  height: 100%;
  color: #3f3f3f;
  font-size: 16px;
  font-weight: bold;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
