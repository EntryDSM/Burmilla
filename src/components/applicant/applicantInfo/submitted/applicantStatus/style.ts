import styled from 'styled-components';
import { color } from '../../../../../styles/index';

export const Wrapper = styled.div`
  display: flex;
`;

export const DetailInfo = styled.img`
  position: absolute;
  top: 18px;
  left: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 36px;

  &:last-child {
    margin-right: 60px;
  }

  > p {
    font-size: 14px;
    color: ${color.lightBorderColor};
    margin-left: 18px;
  }
`;
