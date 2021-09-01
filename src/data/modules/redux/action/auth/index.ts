import {
    ApiPayload,
    LoginPayload,
    RefreshTokenPayload,
    Tokens,
  } from '../../../../api/apiTypes';
  
  export const LOGIN = 'LOGIN';
  export const LOGIN_ASYNC = 'LOGIN_ASYNC';
  export const REFRESH_TOKEN = 'REFRESH_TOKEN';
  export const REFRESH_TOKEN_ASYNC = 'REFRESH_TOKEN_ASYNC';
  export const SET_TOKEN = 'SET_TOKEN';
  
  export type loginType = typeof LOGIN | typeof LOGIN_ASYNC;
  export type loginPayload = ApiPayload<Tokens> & LoginPayload;
  export interface Login {
    type: loginType;
    payload: loginPayload;
  }
  export const loginAction = (payload: loginPayload): Login => ({
    type: LOGIN,
    payload,
  });
  
  export type refreshTokenType =
    | typeof REFRESH_TOKEN
    | typeof REFRESH_TOKEN_ASYNC;
  export type refreshTokenPayload = ApiPayload<Tokens> & RefreshTokenPayload;
  export interface RefreshToken {
    type: refreshTokenType;
    payload;
  }

  export const refreshTokenAction = (
    payload: refreshTokenPayload,
  ): RefreshToken => ({
    type: REFRESH_TOKEN,
    payload,
  });
  
  export type setTokenType = typeof SET_TOKEN;
  export type setTokenPayload = Tokens;
  export interface SetToken {
    type: setTokenType;
    payload: setTokenPayload;
  }
  export const setTokenAction = (payload: setTokenPayload): SetToken => ({
    type: SET_TOKEN,
    payload,
  });
  
  export type AuthActions = Login | RefreshToken | SetToken;
  