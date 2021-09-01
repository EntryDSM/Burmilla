import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;

  > ul {
    padding: 18px 0;
    box-sizing: border-box;
  }
`;

export const IDPicture = styled.img`
  width: 150px;
  height: 200px;
  border: solid 1px #707070;
  margin-right: 36px;
`;

export const InfoLine = styled.li<{ isOneLine: boolean }>`
  display: flex;
  align-items: baseline;
  margin-bottom: 28px;
  ${({ isOneLine }) => !isOneLine && 'flex-direction: column'};

  > h3 {
    font-size: 32px;
    margin-right: 20px;
    font-weight: bold;
  }

  > p {
    font-size: 16px;
    margin-bottom: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
