import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../../utils/saga/createRequestSaga';
import { getApplicantsListApi, getApplicantInfoApi, updateApplicantStatusApi } from '../../../../api/index';
import { GET_APPLICANTS_LIST, GET_APPLICANT_INFO, UPDATE_APPLICANT_STATUS } from '../../../../modules/redux/action/applicant/interface';

export const getApplicantListSaga = createRequestSaga(GET_APPLICANTS_LIST, getApplicantsListApi);
export const getApplicantInfoSaga = createRequestSaga(GET_APPLICANT_INFO, getApplicantInfoApi);
export const updateApplicantStatusSaga = createRequestSaga(UPDATE_APPLICANT_STATUS, updateApplicantStatusApi);

function* applicantSaga() {
  yield takeLatest(GET_APPLICANTS_LIST, getApplicantListSaga);
  yield takeLatest(GET_APPLICANT_INFO, getApplicantInfoSaga);
  yield takeLatest(UPDATE_APPLICANT_STATUS, updateApplicantStatusSaga);
}

export default applicantSaga;
