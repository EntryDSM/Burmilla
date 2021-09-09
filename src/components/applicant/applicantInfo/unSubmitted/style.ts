import styled from 'styled-components';
import { color } from '../../../../styles';

export const DetailInfo = styled.img`
  position: absolute;
  top: 18px;
  left: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  min-width: 28rem;
  height: 28rem;
  background-color: ${color.backgorund};
  padding: 136.5px 72px;
  border-left: 2.5px solid #f0f0f0;

  > h3 {
    font-size: 26px;
    font-weight: bold;    
    font-family: 'Noto Sans KR-Medium', sans-serif !important;
    margin-bottom: 55px;
  }
  > table {
    min-width: 25rem;
  }
`;

export const BasicInfoTableTR = styled.tr`
  text-align: left;
  font-size: 16px;
  line-height: 48px;
  > th {
    width: 146px;
    font-weight: normal;
  }

  > td {
    font-weight: 300;
  }
`;
