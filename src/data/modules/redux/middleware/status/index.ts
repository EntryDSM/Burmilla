import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../../utils/saga/createRequestSaga';
import { getStatus } from '../../../../api/status';
import { GET_STATUS } from '../../action/status/interface';

export const getUserSaga = createRequestSaga(GET_STATUS, getStatus);

function* userSaga() {
  yield takeLatest(GET_STATUS, getUserSaga);
}

export default userSaga;
