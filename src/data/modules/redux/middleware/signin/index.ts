import { call, put, takeLatest } from 'redux-saga/effects';
import { SIGNIN } from '../../action/signin';
import { refreshTokenApi, signinApi } from '../../../../../data/api';
import { IS_LOGIN } from '../../action/auth';
import { REFRESH_TOKEN } from '../../action/signin/interface';

export const refreshTokenSaga = function* (action: any) {
  const FAILURE = `${REFRESH_TOKEN}_FAILURE`;
  const SUCCESS = `${REFRESH_TOKEN}_SUCCESS`;
  const callback = action.payload.callback;
  
  try {
    const response = yield call(refreshTokenApi);
    yield put({
      type: SUCCESS,
    });
    localStorage.setItem('access_token', response.access_token);
    yield call(callback);
  } catch (e) {
    if (e.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...e.response.data, type: REFRESH_TOKEN },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

export const siginRequestSaga = function* (action: any) {
  const SUCCESS = `${SIGNIN}_SUCCESS`;
  const FAILURE = `${SIGNIN}_FAILURE`;

  try {
    const response = yield call(signinApi, action.payload);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
    yield put({
      type: IS_LOGIN,
      payload: true,
    });
  } catch (e) {
    if (e.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...e.response.data, type: SIGNIN },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

function* signinSaga() {
  yield takeLatest(SIGNIN, siginRequestSaga);
  yield takeLatest(REFRESH_TOKEN, refreshTokenSaga);
}

export default signinSaga;
