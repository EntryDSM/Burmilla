import styled from 'styled-components';

export const PaginationContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
`;

export const PageBtn = styled.span`
  font-weight: 300;
  margin: 0 8px;
  cursor: pointer;

  &.selected {
    font-weight: bold;
  }
  &.move-btn {
    font-weight: 500;
  }
`;
