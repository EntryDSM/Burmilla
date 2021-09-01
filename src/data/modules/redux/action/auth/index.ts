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

// import {
//     LoginPayload,
//     RefreshTokenPayload,
//     Tokens,
//   } from '../../../../api/apiTypes';
// import { error } from 'src/models/error';
// import { 
//   IS_LOGIN, 
//   ERROR,
//   SIGNIN_FAILURE,
//   SIGNIN_SUCCESS,
//   SIGNIN,
//   REFRESH_TOKEN,
//   REFRESH_TOKEN_SUCCESS,
//   REFRESH_TOKEN_FAILURE, 
// } from './interface';
// import { createAction } from 'typesafe-actions'


// export const setIsLogin = createAction(IS_LOGIN)<boolean>();
// export const setError = createAction(ERROR)<number>();
// export const signinFailure = createAction(SIGNIN_FAILURE)<error>();
// export const signinSuccess = createAction(SIGNIN_SUCCESS)<string>();
// export const signin = createAction(SIGNIN)<LoginPayload>();
// export const refreshToken = createAction(REFRESH_TOKEN)<{ callback: () => void }>();
// export const refreshTokenFailure = createAction(REFRESH_TOKEN_FAILURE)<error>();
// export const refreshTokenSuccess = createAction(REFRESH_TOKEN_SUCCESS)();


// export type authActionType = 
//   | ReturnType<typeof setIsLogin>
//   | ReturnType<typeof setError>
//   | ReturnType<typeof signinFailure>
//   | ReturnType<typeof signinSuccess>
//   | ReturnType<typeof refreshToken>
//   | ReturnType<typeof refreshTokenFailure>
//   | ReturnType<typeof refreshTokenSuccess>;

// export { 
//   IS_LOGIN,
//   ERROR,
//   SIGNIN,
//   SIGNIN_FAILURE,
//   SIGNIN_SUCCESS,
//   REFRESH_TOKEN,
//   REFRESH_TOKEN_FAILURE,
//   REFRESH_TOKEN_SUCCESS,
// };
