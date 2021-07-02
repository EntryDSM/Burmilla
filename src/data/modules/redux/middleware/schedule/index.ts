import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../../utils/saga/createRequestSaga';
import { getScheduleApi } from '../../../../api/index';
import { GET_STATUS } from '../../../../modules/redux/action/schedule/interface';

export const getScheduleSaga = createRequestSaga(GET_STATUS, getScheduleApi);

function* userSaga() {
  yield takeLatest(GET_STATUS, getScheduleSaga);
}

export default userSaga;
