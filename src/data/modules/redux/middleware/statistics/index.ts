import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../../utils/saga/createRequestSaga';
import { getStatisticsApi } from '../../../../api/index';
import { GET_STATISTICS } from "../../action/statistics/interface";
// import { sagaEntity } from '../index';
import {
  // getStatisticsType,
  // GetStatistics,
  // GET_STATISTICS,
  // GET_STATISTICS_ASYNC,
} from '../../action/statistics';

// function* getStatistics(action: GetStatistics) {
//   yield sagaEntity<getStatisticsType>({
//     action,
//     api: getStatisticsApi,
//     type: GET_STATISTICS_ASYNC,
//   });
// }

// export default function* applicantSaga() {
//   yield (takeLatest(GET_STATISTICS, getStatisticsSaga));
// }
export const getStatisticsSaga = createRequestSaga(GET_STATISTICS, getStatisticsApi);

function* userSaga() {
  yield takeLatest(GET_STATISTICS, getStatisticsSaga);
}

export default userSaga;