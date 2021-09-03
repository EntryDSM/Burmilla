import styled from 'styled-components';

export const PaginationContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
