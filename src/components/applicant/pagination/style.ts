import styled from 'styled-components';

export const PaginationContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const PageBtn = styled.span`
  font-weight: 500;
  margin: 0 8px;
  cursor: pointer;

  &.selected {
    font-weight: bold;
  }
  &.move-btn {
    & > img {
      width: 12px;
      height: 12px;
    }
  }
`;
