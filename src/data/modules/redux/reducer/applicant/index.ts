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
    size: 1,
    page: 0,
    is_daejeon: null,
    is_nationwide: null,
    is_printed_arrived: null,
    is_common: null,
    is_meister: null,
    is_social: null,
    receipt_code: null,
    telephone_number: null,
    name: null,
  },
  applicantsList: {
    total_elements: 0,
    total_pages: 0,
    applicants_information_response: [],
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
      const { applicants_information_response } = state.applicantsList;
      const { is_printed_arrived } = action.payload;

      newApplicantsList.applicants_information_response = applicants_information_response.map(v =>
        v.is_printed_arrived === is_printed_arrived ? { ...v } : v,
      );

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
