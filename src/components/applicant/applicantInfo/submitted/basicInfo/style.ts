import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 28px 0 20px;
  min-width: 25rem;

  > ul {
    padding: 8px 0 14px;
    box-sizing: border-box;
  }
`;

export const IDPicture = styled.img`
  width: 115px;
  height: 140px;
  border: solid 1px #707070;
  margin-right: 28px;
`;

export const InfoLine = styled.li<{ isOneLine: boolean }>`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: bold;
  ${({ isOneLine }) => !isOneLine && 'flex-direction: column'};

  > h3 {
    font-family: 'Noto Sans KR-Medium', sans-serif !important;
    font-size: 28px;
    margin-right: 16px;
    font-weight: bold;
  }

  > p {
    font-size: 13px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
