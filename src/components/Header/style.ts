import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../styles/index';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.12);
  padding: 0 260px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: absolute;
  z-index: 1;
`;

export const Logo = styled.img`
  width: 93px;
  height: 29px;
`;

export const HeaderItemsContainer = styled.div`
  display: flex;
  align-items: center;

  &>Button {
    margin-right:15px;
  }
`;

export const HeaderItem = styled(Link)`
    color: ${color.primaryTextColor};
    margin-right: 12px;
`;
