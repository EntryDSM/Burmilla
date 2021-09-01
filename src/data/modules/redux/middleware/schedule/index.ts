import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../../utils/saga/createRequestSaga';
import { getScheduleApi, updateScheduleApi } from '../../../../api/index';
import { GET_STATUS, SET_SCHEDULE } from '../../../../modules/redux/action/schedule/interface';

export const getScheduleSaga = createRequestSaga(GET_STATUS, getScheduleApi);
export const updateScheduleSaga = createRequestSaga(SET_SCHEDULE, updateScheduleApi);

function* scheduleSaga() {
  yield takeLatest(GET_STATUS, getScheduleSaga);
  yield takeLatest(SET_SCHEDULE, updateScheduleSaga);
}

export default scheduleSaga;
