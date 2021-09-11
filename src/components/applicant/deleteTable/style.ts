import { pxToRem, color } from 'src/styles';
import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
`;
export const ModalDeleteTabel = styled.div`
  width: ${pxToRem(596)}rem;
  height: ${pxToRem(356)}rem;
  padding: 12px;
  background-color: white;
`;

export const ModalDeleteImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CloseModalImg = styled.img`
  width: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalTitle = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2.8rem 0 0.2rem 0;
  font-size: 28px;
  font-family: 'Noto Sans KR-Medium', sans-serif !important;
  font-weight: bold;
`;

export const ModalSubTitle = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
`;

export const FormBox = styled.div`
  width: 100%;
  margin-top: 3.6rem;
  text-align: center;
  
  > span {
    margin-right: 8rem;
    font-size: 13px;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif !important;
    color: ${color.primaryColor}
  }
`;

export const InputBox = styled.div`
  display: flex;
  width: 18rem;
  height: 1rem;
  margin: 0 auto;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid ${color.inputBackground};
  background-color: ${color.inputBackground};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${color.inputBackground};
  font-size: 14px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif !important;
`;

export const CheckDisplayImg = styled.img`
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const DeleteButton = styled.div<{ disable: boolean }>`
  width: 19.6rem;
  height: 3.2rem;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 5px;
  ${({ disable }) => 
    disable 
      ? css`
          border: 1px solid ${color.primaryColor};
          background-color: ${color.primaryColor};
        `
      : css`
          border: 1px solid ${color.fail};
          background-color: ${color.fail};
        `};
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Midium', sans-serif !important;
`;
