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
  background: #a6ebf8;
  line-height: 2.8;
`;

export const TH = styled.th`
  width: 14%;
  height: 2.8;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid ${color.darkBorderColor};

  &:first-child {
    width: 16%;
  }
`;

export const TR = styled.tr<{ isSelected: boolean }>`
  line-height: 2.6;
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? color.lightPrimaryColor : 'white')};
`;

export const TD = styled.td`
  height: 100%;
  font-weight: 300;
  border-bottom: 1px solid #ededed;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
