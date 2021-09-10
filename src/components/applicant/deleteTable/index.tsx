import React, { FC } from "react";
import * as S from "./style";
import { close_modal } from "../../../assets/applicants";
import { CheckPasswordRequest } from "../../../data/api/apiTypes";

interface Props {
  disable: boolean;
  isCheckPassword: boolean;
  isDeleteTableModalSwitch: boolean;
  checkPassword: (payload: CheckPasswordRequest) => void;
  deleteApplicantTable: () => void;
  setIsDeleteTableModalSwitch: (payload: boolean) => void;
}

const DeleteTable: FC<Props> = ({
  disable,
  isCheckPassword,
  isDeleteTableModalSwitch,
  checkPassword,
  deleteApplicantTable,
  setIsDeleteTableModalSwitch,
}) => {
  return (
    <S.ModalWrapper>
      <S.ModalDeleteTabel>
        <S.ModalDeleteImg>
          <S.Img src={close_modal} alt="모달 닫기" />
        </S.ModalDeleteImg>
        <S.ModalTitle>정말 삭제하시겠습니까?</S.ModalTitle>
        <S.ModalSubTitle>
          삭제하면 다시 수정할 수 없으니 다시 한번 확인해 주세요
        </S.ModalSubTitle>
        <S.FormBox>
          <S.InputBox>
            <S.Input />
          </S.InputBox>
          <S.DeleteButton>
            <S.Button />
          </S.DeleteButton>
        </S.FormBox>
      </S.ModalDeleteTabel>
    </S.ModalWrapper>
  );
};

export default DeleteTable;
