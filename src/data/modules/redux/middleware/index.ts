import { all } from 'redux-saga/effects';
import signin from './signin';
import applicantSaga from './applicant';
import statisticsSaga from './statistics';
import scheduleSaga from './schedule';

export default function* rootSaga() {
  yield all([
    signin(), 
    applicantSaga(), 
    scheduleSaga(), 
    statisticsSaga(),
  ]);
}
