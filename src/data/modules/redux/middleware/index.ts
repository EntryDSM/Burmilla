import { put, call, all } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import authSaga from './auth';
import applicantSaga from './applicant';
import statisticsSaga from './receipt';
// import { refreshTokenApi } from '../../../api/index';

export default function* rootSaga() {
    yield all([call(authSaga), call(applicantSaga), call(statisticsSaga)])
}