import React from "react";

import { useHistory } from "react-router-dom";
import { getAccessToken, getRefreshToken } from "../../../utils/token";
import { useAuth } from "../../../hooks/auth";

const CheckToken = ({ children }) => {
  const { push } = useHistory();
  const { setTokens } = useAuth();

  React.useEffect(() => {
    const token = getAccessToken();

    if (token === null) {
      window.alert("로그인 후에 접근할 수 있습니다.");
      push("/login");
    } else {
      setTokens({
        access_token: getAccessToken(),
        refresh_token: getRefreshToken(),
      });
    }
  }, []);

  return children;
};

export default CheckToken;
