import * as React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import * as S from "./style";
import { logo } from "../../assets/header";
import { Button } from "../Common";
import { clearStorage } from "../../utils/token";
import { useAuth } from "../../hooks/auth";
import checkApiStatus from "../../data/api/checkApiStatus";

const Header = () => {
  const [checkUserTokenStatus, setCheckUserTokenStatus] =
    React.useState<boolean>(false);

  const location = useLocation();
  const history = useHistory();

  const {
    authStore: { loginStatus },
  } = useAuth();

  if (checkApiStatus(loginStatus)._200) {
    setCheckUserTokenStatus(true);
  }

  const headerItems = [
    {
      link: "/",
      content: "일정",
    },
    {
      link: "/total",
      content: "접수 현황",
    },
    {
      link: "/applicant",
      content: "지원자 목록",
    },
  ];

  const handleButtonClick = React.useCallback(() => {
    clearStorage();
    history.go(0);
  }, []);

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderLogo>
          <Link to="/">
            <S.Logo src={logo} alt="Entry_Logo" />
          </Link>
        </S.HeaderLogo>
        <S.HeaderButton>
          <S.HeaderItemsContainer>
            {
              // checkUserTokenStatus &&
              headerItems.map((item) => (
                <S.HeaderItemBox>
                  <S.HeaderItem
                    key={item.content}
                    to={item.link}
                    className={location.pathname === item.link && "selected"}
                  >
                    {item.content}
                    {item.content === "일정" ? (
                      <div className="schedule" />
                    ) : null || item.content === "접수 현황" ? (
                      <div className="total" />
                    ) : null || item.content === "지원자 목록" ? (
                      <div className="applicant" />
                    ) : null}
                  </S.HeaderItem>
                </S.HeaderItemBox>
              ))
            }
            {
              // checkUserTokenStatus &&
              <S.HeaderLogoutBox>
                <Button className="header_logout" onClick={handleButtonClick}>
                  로그아웃
                </Button>
              </S.HeaderLogoutBox>
            }
          </S.HeaderItemsContainer>
        </S.HeaderButton>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
