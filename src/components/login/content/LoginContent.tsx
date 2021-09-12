import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import * as S from "../style";
import { logo } from "../../../assets/header";
import { display_icon, hide_icon } from "../../../assets/login";
import { useSignIn } from "src/hooks/signin";
import { useAuth } from "src/hooks/auth";
import { SIGNIN } from "../../../data/modules/redux/action/signin";

const LoginContent: FC = () => {
  const [isPasswordShown, setIsPasswordShown] = React.useState<boolean>(false);

  const history = useHistory();
  const { state, setState } = useSignIn();
  const authState = useAuth();

  React.useEffect(() => {
    return () => {
      setState.reset();
    };
  }, []);

  React.useEffect(() => {
    if (authState.state.isLogin) {
      history.push("/");
    }
  }, [authState.state.isLogin]);

  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setId(e.target.value);
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setPassword(e.target.value);
  };

  const loginButtonClickHandler = () => {
    setState.signin({
      id: state.id,
      password: state.password,
    });
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loginButtonClickHandler();
    }
  };

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <S.LoginContent>
      <S.LoginBackground />
      <S.LoginContentWrapper>
        <S.LoginContentTitle>
          <S.LoginContentTitleHead>
            <h1>Login</h1>
          </S.LoginContentTitleHead>
          <S.LoginContentTitleBody>
            <p>지급받은 아이디와 비밀번호를 입력해 주세요</p>
          </S.LoginContentTitleBody>
        </S.LoginContentTitle>
        <S.LoginContentSign>
          <S.LoginContentSignLogo>
            <img src={logo} alt="logo" />
            {state.error.type === SIGNIN ? (
              <span>아이디 또는 비밀번호가 잘못되었습니다!</span>
            ) : (
              ""
            )}
          </S.LoginContentSignLogo>
          <S.LoginContentSignInput>
            <S.LoginInputId
              type="text"
              placeholder="아이디"
              onChange={idChangeHandler}
              onKeyPress={keyPressHandler}
            />
            <p />
            <S.LoginPasswordBox>
              <S.LoginInputPassword
                type={isPasswordShown ? "text" : "password"}
                placeholder="비밀번호"
                onChange={passwordChangeHandler}
                onKeyPress={keyPressHandler}
              />
              <S.LoginPasswordDisplayIcon>
                <img
                  src={isPasswordShown ? hide_icon : display_icon}
                  title={isPasswordShown ? "문자 숨기기" : "문자 보이기"}
                  alt="show-icon"
                  onClick={togglePasswordVisiblity}
                />
              </S.LoginPasswordDisplayIcon>
            </S.LoginPasswordBox>
          </S.LoginContentSignInput>
          <S.LoginBtn onClick={loginButtonClickHandler}>Sign in</S.LoginBtn>
        </S.LoginContentSign>
      </S.LoginContentWrapper>
    </S.LoginContent>
  );
};

export default LoginContent;
