import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  loginAction,
  loginPayload,
  setTokenAction,
  setTokenPayload,
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

  return { authStore, login, setTokens };
};

export default useAuth;
