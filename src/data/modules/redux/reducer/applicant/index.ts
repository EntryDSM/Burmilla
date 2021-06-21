import {
  ApplicantActions,
  SET_FILTER,
  GET_APPLICANTS_LIST_ASYNC,
  GET_APPLICANT_INFO_ASYNC,
  UPDATE_APPLICANT_STATUS_ASYNC,
  UPDATE_APPLICANT_LIST,
  RESET_UPDATE_STATUS,
} from '../../action/applicant';
import {
  GetApplicantsListResponse,
  GetApplicantInfoResponse,
  GetApplicantsListPayload,
} from '../../../../api/apiTypes';
import { returnApiResponseData } from '../';
import { API_STATUS } from '../../../../api/index';

export interface InitialState {
  getApplicantsListStatus: 0 | 200 | 401 | 403;
  getApplicantInfoStatus: 0 | 200 | 401 | 403 | 423;
  updateApplicantStatusStatus: 0 | 204 | 400 | 401 | 403;
  filters: GetApplicantsListPayload;
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse | null;
}

const initialState: InitialState = {
  getApplicantsListStatus: 0,
  getApplicantInfoStatus: 0,
  updateApplicantStatusStatus: 0,
  filters: {
    index: 1,
    email: null,
    receipt_code: null,
    school_name: null,
    applicant_tel: null,
    name: null,
    is_daejeon: null,
    is_nationwide: null,
    is_arrived: null,
    is_paid: null,
    is_common: null,
    is_meister: null,
    is_social: null,
  },
  applicantsList: {
    max_index: 0,
    user_per_page: 0,
    applicants_information: [],
  },
  currnetApplicantInfo: null,
};

const applicantReducer = (
  state = initialState,
  action: ApplicantActions,
): InitialState => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case GET_APPLICANTS_LIST_ASYNC:
      return {
        ...returnApiResponseData<InitialState>({
          state,
          statusName: API_STATUS.getApplicantsListStatus,
          payload: action.payload,
          dataKeyName: 'applicantsList',
        }),
        currnetApplicantInfo: null,
      };
    case GET_APPLICANT_INFO_ASYNC:
      return returnApiResponseData<InitialState>({
        state,
        statusName: API_STATUS.getApplicantInfoStatus,
        payload: action.payload,
        dataKeyName: 'currnetApplicantInfo',
      });
    case UPDATE_APPLICANT_STATUS_ASYNC: {
      return returnApiResponseData<InitialState>({
        state,
        statusName: API_STATUS.updateApplicantStatusStatus,
        payload: action.payload,
      });
    }
    case UPDATE_APPLICANT_LIST:
      const newApplicantsList = { ...state.applicantsList };
      const newCurrnetApplicantInfo = { ...state.currnetApplicantInfo };
      const { applicants_information } = state.applicantsList;
      const { email, is_arrived, is_paid, is_final_submit } = action.payload;

      newApplicantsList.applicants_information = applicants_information.map(v =>
        v.email === email ? { ...v, is_arrived, is_paid, is_final_submit } : v,
      );
      newCurrnetApplicantInfo.applicant_information.status = {
        is_arrived,
        is_paid,
        is_final_submit,
      };

      return {
        ...state,
        applicantsList: newApplicantsList,
        currnetApplicantInfo: newCurrnetApplicantInfo,
      };
    case RESET_UPDATE_STATUS:
      return {
        ...state,
        updateApplicantStatusStatus: 0,
      };
    default:
      return state;
  }
};

export default applicantReducer;
