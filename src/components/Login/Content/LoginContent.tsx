import * as React from "react";
import { useHistory } from "react-router";

import * as S from "../style";
import { logo } from "../../../assets/header";
import { display_icon, hide_icon } from "../../../assets/login";
import { useAuth } from "../../../hooks/auth";
import checkApiStatus from "../../../data/api/checkApiStatus";
import { setToken } from "../../../utils/token";

const LoginContent = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isFailed, setIsFailed] = React.useState<boolean>(false);
  const [isPasswordShown, setIsPasswordShown] = React.useState<boolean>(false);

  const {
    login,
    authStore: { loginStatus, tokens },
  } = useAuth();
  const { push } = useHistory();

  React.useEffect(() => {
    if (checkApiStatus(loginStatus)._200) {
      setToken({
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
      });
      push("/");
    } else if (checkApiStatus(loginStatus)._400) {
      setIsFailed(true);
    } else if (checkApiStatus(loginStatus)._401) {
      setIsFailed(true);
    }
  }, [loginStatus]);

  const handleChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    []
  );
  const handleChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  );
  const handleLogin = React.useCallback(() => {
    login({ email, password });
  }, [email, password]);

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
            {isFailed ? (
              <span>아이디 또는 비밀번호가 잘못되었습니다!</span>
            ) : (
              ""
            )}
          </S.LoginContentSignLogo>
          <S.LoginContentSignInput>
            <S.LoginInput
              type="text"
              placeholder="아이디"
              value={email}
              onChange={handleChangeEmail}
            />
            <p />
            <S.LoginInput
              type={isPasswordShown ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={handleChangePassword}
            />
            <S.LoginPasswordDisplayIcon
              src={isPasswordShown ? hide_icon : display_icon}
              title={isPasswordShown ? "문자 숨기기" : "문자 보이기"}
              alt="show-icon"
              onClick={togglePasswordVisiblity}
            />
          </S.LoginContentSignInput>
          <S.LoginBtn onClick={handleLogin}>Sign in</S.LoginBtn>
        </S.LoginContentSign>
      </S.LoginContentWrapper>
    </S.LoginContent>
  );
};

export default LoginContent;
