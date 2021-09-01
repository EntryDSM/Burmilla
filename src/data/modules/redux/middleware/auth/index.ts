// import { call, put, takeLatest } from 'redux-saga/effects';
// import { SIGNIN } from '../../action/auth';
// import { RefreshResponse } from "../../../../api/apiTypes";
// import { refreshTokenApi, loginApi } from '../../../../api/index';
// import { IS_LOGIN } from '../../action/auth';
// import { REFRESH_TOKEN } from '../../action/auth/interface';

// export const refreshTokenSaga = function* (action: any) {
//   const FAILURE = `${REFRESH_TOKEN}_FAILURE`;
//   const SUCCESS = `${REFRESH_TOKEN}_SUCCESS`;
//   const callback = action.payload.callback;
//   try {
//     const response = yield call(refreshTokenApi());
//     yield put({
//       type: SUCCESS,
//     });
//     localStorage.setItem('access_token', response.access_token);
//     yield call(callback);
//   } catch (e) {
//     if (e.response?.data) {
//       yield put({
//         type: FAILURE,
//         payload: { ...e.response.data, type: SIGNIN },
//       });
//     } else {
//       yield put({
//         type: FAILURE,
//         payload: {
//           message: `Network Error`,
//           status: 500,
//         },
//       });
//     }
//   }
// };

// export const siginRequestSaga = function* (action: any) {
//   const SUCCESS = `${SIGNIN}_SUCCESS`;
//   const FAILURE = `${SIGNIN}_FAILURE`;
//   try {
//     const response = yield call(loginApi, action.payload);
//     yield put({
//       type: SUCCESS,
//       payload: response ? response.data : null,
//     });
//     yield put({
//       type: IS_LOGIN,
//       payload: true,
//     });
//   } catch (e) {
//     if (e.response?.data) {
//       yield put({
//         type: FAILURE,
//         payload: { ...e.response.data, type: SIGNIN },
//       });
//     } else {
//       yield put({
//         type: FAILURE,
//         payload: {
//           message: `Network Error`,
//           status: 500,
//         },
//       });
//     }
//   }
// };

// function* signinSaga() {
//   yield takeLatest(SIGNIN, siginRequestSaga);
//   yield takeLatest(REFRESH_TOKEN, refreshTokenSaga);
// }

// export default signinSaga;

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
