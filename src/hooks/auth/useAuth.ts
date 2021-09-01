// import { useDispatch } from 'react-redux';
// import { useSelectState } from '../default';
// import { refreshToken, signin, setIsLogin } from '../../data/modules/redux/action/auth';
// import { LoginPayload } from "../../data/api/apiTypes";

// const useSignin = () => {
//   const dispatch = useDispatch();
//   const state = useSelectState().auth;
//   const setState = {
//     setIsLogin: (payload: boolean) => dispatch(setIsLogin(payload)),
//     signin: (payload: LoginPayload) => {
//       dispatch(signin(payload));
//     },
//     refreshToken: (callback: () => void) => {
//       dispatch(refreshToken({ callback }));
//     },
//   };
//   return {
//     state,
//     setState,
//   };
// };

// export default useSignin;

import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  loginAction,
  loginPayload,
  setTokenAction,
  setTokenPayload,
  refreshTokenAction,
  refreshTokenPayload
} from '../../data/modules/redux/action/auth';
import { AppState } from '../../data/modules/store';
import { InitialState } from '../../data/modules/redux/reducer/auth';

export const useAuth = () => {
  const authStore = useSelector<AppState, InitialState>((state) => ({
    loginStatus: state.auth.loginStatus,
    tokens: state.auth.tokens,
  }));

  const dispatch = useDispatch();

  const login = useCallback(
    (payload: loginPayload) => dispatch(loginAction(payload)),
    [dispatch],
  );
  
  const setTokens = useCallback(
    (payload: setTokenPayload) => dispatch(setTokenAction(payload)),
    [dispatch],
  );

  const refreshtoken = useCallback(
    (payload: refreshTokenPayload) => dispatch(refreshTokenAction(payload)),
    [dispatch],
  )

  return { authStore, login, setTokens, refreshtoken };
};

export default useAuth;
