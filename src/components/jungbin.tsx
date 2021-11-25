import React, { FC } from "react";
import axios from "axios";
import styled from "styled-components";
import { getAccessToken } from "src/utils/token";
import uri from "src/data/api/uri";

const LoginContent: FC = () => {
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const jungbinInstance = (api: "main" | "excel") =>
    axios.create({
      timeout: 10000,
      baseURL: "https://api.smooth-bear.live/",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

  const authorization = (token: string) => ({
    Authorization: `Bearer ${token}`,
    "Cache-Control": "no-cache",
  });

  const changePassword = async () => {
    try {
      const request = jungbinInstance("main");
      const response = await request.put(
        uri.jungbin,
        {
          "pre-password": password,
          password: newPassword,
        },
        {
          headers: authorization(getAccessToken()),
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const inputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changePassword();
    }
  };
  return (
    <div>
      <PrepasswordInput onChange={inputPassword} onKeyPress={keyPressHandler} />
      <PasswordInput onChange={inputNewPassword} onKeyPress={keyPressHandler} />
    </div>
  );
};

const PrepasswordInput = styled.input`
  height: 50px;
  position: fixed;
  margin-top: 100px;
  margin-left: 40px;
  border-color: grey;
  border: 1px solid red;
`;

const PasswordInput = styled.input`
  height: 50px;
  position: fixed;
  margin-top: 200px;
  margin-left: 40px;
  border-color: grey;
  border: 1px solid red;
`;

const ChangePasswordButton = styled.button`
  border: 1px solid black;
  height: 40px;
  width: 150px;
  margin-top: 300px;
  margin-left: 40px;
  position: fixed;
  background-color: pink;
`;

export default LoginContent;
