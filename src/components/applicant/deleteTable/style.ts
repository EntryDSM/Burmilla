import { pxToRem } from 'src/styles';
import styled from 'styled-components';

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

export const Img = styled.img`
  width: 12px;
`;

export const ModalTitle = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ModalSubTitle = styled.h5`

`;

export const FormBox = styled.div`

`;

export const InputBox = styled.div`

`;

export const Input = styled.input`

`;

export const DeleteButton = styled.div`

`;

export const Button = styled.button`

`;
