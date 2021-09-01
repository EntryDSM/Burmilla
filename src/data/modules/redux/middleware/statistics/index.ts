import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../../utils/saga/createRequestSaga';
import { getStatisticsApi } from '../../../../api/index';
import { GET_STATISTICS } from "../../action/statistics/interface";

export const getStatisticsSaga = createRequestSaga(GET_STATISTICS, getStatisticsApi);

function* statisticsSaga() {
  yield takeLatest(GET_STATISTICS, getStatisticsSaga);
}

export default statisticsSaga;