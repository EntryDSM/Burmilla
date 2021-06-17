import { takeLatest, all } from 'redux-saga/effects';

import { sagaEntity } from '../index';
import {
  LOGIN,
  LOGIN_ASYNC,
  Login,
  loginType,
  REFRESH_TOKEN,
  REFRESH_TOKEN_ASYNC,
  RefreshToken,
  refreshTokenType,
} from '../../action/auth';
import { loginApi, refreshTokenApi } from '../../../../api/index';
import { LoginPayload, RefreshTokenPayload } from '../../../../api/apiTypes';

function* login(action: Login) {
  yield sagaEntity<loginType, LoginPayload>({
    action,
    api: loginApi,
    type: LOGIN_ASYNC,
  });
}

function* refreshToken(action: RefreshToken) {
  yield sagaEntity<refreshTokenType, RefreshTokenPayload>({
    action,
    api: refreshTokenApi,
    type: REFRESH_TOKEN_ASYNC,
  });
}

export default function* authSaga() {
  yield all([
    takeLatest(LOGIN, login),
    takeLatest(REFRESH_TOKEN, refreshToken),
  ]);
}
