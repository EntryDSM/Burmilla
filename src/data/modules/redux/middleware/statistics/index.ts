import { all, takeLatest } from 'redux-saga/effects';

import { sagaEntity } from '../index';
import {
  getStatisticsType,
  GetStatistics,
  GET_STATISTICS,
  GET_STATISTICS_ASYNC,
} from '../../action/statistics';
import { getStatisticsApi } from '../../../../api/index';
import { GetStatisticsPayload } from '../../../../api/apiTypes';

function* getStatistics(action: GetStatistics) {
  yield sagaEntity<getStatisticsType, GetStatisticsPayload>({
    action,
    api: getStatisticsApi,
    type: GET_STATISTICS_ASYNC,
  });
}

export default function* applicantSaga() {
  yield all([takeLatest(GET_STATISTICS, getStatistics)]);
}
