import { all, takeLatest } from 'redux-saga/effects';

import { sagaEntity } from '../index';
import {
  updateScheduleStatusType,
  UpdateScheduleStatus,
} from '../../action/schedule';
import { UPDATE_SCHEDULE_STATUS, UPDATE_SCHEDULE_STATUS_ASYNC } from '../../action/schedule/interface';
import { updateScheduleApi } from '../../../../api';
import { UpdateScheduleProcessTimeType } from '../../reducer/schedule/interface';

function* updateScheduleStatus(action: UpdateScheduleStatus) {
    yield sagaEntity<updateScheduleStatusType, UpdateScheduleProcessTimeType>({
      action,
      api: updateScheduleApi,
      type: UPDATE_SCHEDULE_STATUS_ASYNC,
    });
  }

  export default function* applicantSaga() {
    yield all([
      takeLatest(UPDATE_SCHEDULE_STATUS, updateScheduleStatus),
    ]);
  }
