import React, { FC } from "react";
import { useHistory } from "react-router";
import * as S from "./style";
import { close_modal } from "../../../assets/applicants";
import { display_icon, hide_icon } from "../../../assets/login";
import {
  GetApplicantsListResponse,
  CheckPasswordRequest,
} from "../../../data/api/apiTypes";

interface Props {
  disable: boolean;
  applicantsList: GetApplicantsListResponse;
  password: string;
  setPassword: (payload: string) => void;
  checkPassword: (payload: CheckPasswordRequest) => void;
  deleteApplicantTable: () => void;
  setIsDeleteTableModalSwitch: (payload: boolean) => void;
}

const DeleteTable: FC<Props> = ({
  disable,
  applicantsList,
  password,
  setPassword,
  checkPassword,
  deleteApplicantTable,
  setIsDeleteTableModalSwitch,
}) => {
  const [isPasswordShown, setIsPasswordShown] = React.useState<boolean>(false);

  const history = useHistory();

  React.useEffect(() => {
    checkPassword({ password });
  }, [password]);

  const handleClickOffModal = React.useCallback(() => {
    setIsDeleteTableModalSwitch(false);
  }, []);

  const modalClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleClickDeleteTable = React.useCallback(() => {
    if (disable === true) {
      deleteApplicantTable();
    }
    return false;
  }, []);

  return (
    <S.ModalWrapper onClick={handleClickOffModal}>
      <S.ModalDeleteTabel onClick={modalClickHandler}>
        <S.ModalDeleteImg>
          <S.CloseModalImg
            src={close_modal}
            onClick={handleClickOffModal}
            alt="모달 닫기"
          />
        </S.ModalDeleteImg>
        <S.ModalTitle>정말 삭제하시겠습니까?</S.ModalTitle>
        <S.ModalSubTitle>
          삭제하면 다시 수정할 수 없으니 다시 한번 확인해 주세요
        </S.ModalSubTitle>
        <S.FormBox>
          {password && !disable ? (
            <span>비밀번호가 일치하지 않습니다</span>
          ) : (
            ""
          )}
          <S.InputBox>
            <S.Input
              type={isPasswordShown ? "text" : "password"}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handleChangePassword}
            />
            <S.CheckDisplayImg
              src={isPasswordShown ? hide_icon : display_icon}
              title={isPasswordShown ? "문자 숨기기" : "문자 보이기"}
              alt="show-icon"
              onClick={togglePasswordVisiblity}
            />
          </S.InputBox>
          <S.DeleteButton disable={disable}>
            <S.Button onClick={handleClickDeleteTable}>삭제</S.Button>
          </S.DeleteButton>
        </S.FormBox>
      </S.ModalDeleteTabel>
    </S.ModalWrapper>
  );
};

export default DeleteTable;
