import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../../utils/saga/createRequestSaga';
import { getApplicantsListApi, getApplicantInfoApi, updateApplicantStatusApi, updateApplicantSubmitStatusApi } from '../../../../api/index';
import { GET_APPLICANTS_LIST, GET_APPLICANT_INFO, UPDATE_APPLICANT_STATUS, UPDATE_APPLICANT_SUBMIT_STATUS } from '../../../../modules/redux/action/applicant/interface';

export const getApplicantListSaga = createRequestSaga(GET_APPLICANTS_LIST, getApplicantsListApi);
export const getApplicantInfoSaga = createRequestSaga(GET_APPLICANT_INFO, getApplicantInfoApi);
export const updateApplicantStatusSaga = createRequestSaga(UPDATE_APPLICANT_STATUS, updateApplicantStatusApi);
export const updateApplicantSubmitStatusSaga = createRequestSaga(UPDATE_APPLICANT_SUBMIT_STATUS, updateApplicantSubmitStatusApi);

function* applicantSaga() {
  yield takeLatest(GET_APPLICANTS_LIST, getApplicantListSaga);
  yield takeLatest(GET_APPLICANT_INFO, getApplicantInfoSaga);
  yield takeLatest(UPDATE_APPLICANT_STATUS, updateApplicantStatusSaga);
  yield takeLatest(UPDATE_APPLICANT_SUBMIT_STATUS, updateApplicantSubmitStatusSaga);
}

export default applicantSaga;
