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
  padding: 136.5px 72px;
  height: 28rem;
  background-color: ${color.backgorund};
  border-left: 2.5px solid #f0f0f0;

  > h3 {
    font-size: 26px;
    font-weight: bold;    
    font-family: 'Noto Sans KR-Medium', sans-serif !important;
    margin-bottom: 55px;
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
