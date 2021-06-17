import { all, takeLatest } from 'redux-saga/effects';

import { sagaEntity } from '../index';
import {
  getApplicantsListType,
  GetApplicantsList,
  GET_APPLICANTS_LIST,
  GET_APPLICANTS_LIST_ASYNC,
  getApplicantInfoType,
  GetApplicantInfo,
  GET_APPLICANT_INFO,
  GET_APPLICANT_INFO_ASYNC,
  updateApplicantStatusType,
  UpdateApplicantStatus,
  UPDATE_APPLICANT_STATUS,
  UPDATE_APPLICANT_STATUS_ASYNC,
} from '../../action/applicant';
import {
  getApplicantsListApi,
  getApplicantInfoApi,
  updateApplicantStatusApi,
} from '../../../../api';
import {
  GetApplicantsListPayload,
  GetApplicantInfoPayload,
  UpdateApplicantStatusPayload,
} from '../../../../api/apiTypes';

function* getApplicantsList(action: GetApplicantsList) {
  yield sagaEntity<getApplicantsListType, GetApplicantsListPayload>({
    action,
    api: getApplicantsListApi,
    type: GET_APPLICANTS_LIST_ASYNC,
  });
}
function* getApplicantInfo(action: GetApplicantInfo) {
  yield sagaEntity<getApplicantInfoType, GetApplicantInfoPayload>({
    action,
    api: getApplicantInfoApi,
    type: GET_APPLICANT_INFO_ASYNC,
  });
}
function* updateApplicantStatus(action: UpdateApplicantStatus) {
  yield sagaEntity<updateApplicantStatusType, UpdateApplicantStatusPayload>({
    action,
    api: updateApplicantStatusApi,
    type: UPDATE_APPLICANT_STATUS_ASYNC,
  });
}

export default function* applicantSaga() {
  yield all([
    takeLatest(GET_APPLICANTS_LIST, getApplicantsList),
    takeLatest(GET_APPLICANT_INFO, getApplicantInfo),
    takeLatest(UPDATE_APPLICANT_STATUS, updateApplicantStatus),
  ]);
}
