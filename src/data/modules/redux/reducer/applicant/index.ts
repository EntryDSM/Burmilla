import { ApplicantState } from "./interface";
import { applicantActionType } from '../../action/applicant';
import { 
  SET_FILTER,
  GET_APPLICANT_INFO_SUCCESS,
  GET_APPLICANT_INFO_FAILURE,
  GET_APPLICANTS_LIST_SUCCESS,
  GET_APPLICANTS_LIST_FAILURE,
  UPDATE_APPLICANT_STATUS,
  UPDATE_APPLICANT_STATUS_SUCCESS,
  UPDATE_APPLICANT_STATUS_FAILURE,
  // UPDATE_APPLICANT_SUBMIT_STATUS,
  // UPDATE_APPLICANT_SUBMIT_STATUS_SUCCESS,
  // UPDATE_APPLICANT_SUBMIT_STATUS_FAILURE,
  // UPDATE_APPLICANT_LIST,
  // UPDATE_APPLICANT_LIST_SUCCESS,
  // UPDATE_APPLICANT_LIST_FAILURE,
  RESET_UPDATE_STATUS
} from "../../action/applicant/interface";

const InitialState: ApplicantState = {
  getApplicantsListStatus: 0,
  getApplicantInfoStatus: 0,
  updateApplicantStatusStatus: 0,
  filters: {
    size: 10,
    page: 0,
    is_daejeon: true,
    is_nationwide: true,
    is_printed_arrived: null,
    is_common: true,
    is_meister: true,
    is_social: true,
    receipt_code: null,
    telephone: null,
    name: null,
  },
  applicantsList: {
    total_elements: 0,
    total_pages: 0,
    applicants_information_responses: [],
  },
  currnetApplicantInfo: null,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const applicantReducer = (state: ApplicantState = InitialState, action: applicantActionType) => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    }
    case GET_APPLICANTS_LIST_SUCCESS: {
      return {
        ...state,
        applicantsList: {
          total_elements: action.payload.total_elements,
          total_pages: action.payload.total_pages,
          applicants_information_responses: action.payload.applicants_information_responses,
        },
      };
    }
    case GET_APPLICANTS_LIST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case GET_APPLICANT_INFO_SUCCESS:
      return {
        ...state,
        currnetApplicantInfo: null,
      };
    case GET_APPLICANT_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_APPLICANT_STATUS: 
      return {
        ...state,
      }
    case UPDATE_APPLICANT_STATUS_SUCCESS: 
      return {
        ...state,
      }
    case UPDATE_APPLICANT_STATUS_FAILURE: 
      return {
        ...state,
      }
    // case UPDATE_APPLICANT_LIST:
    //   const newApplicantsList = { ...state.applicantsList };
    //   const newCurrnetApplicantInfo = { ...state.currnetApplicantInfo };
    //   const { applicants_information_response } = state.applicantsList;
    //   const { is_printed_arrived } = action.payload;

    //   newApplicantsList.applicants_information_response = applicants_information_response.map(v =>
    //     v.is_printed_arrived === is_printed_arrived ? { ...v } : v,
    //   );
    //   // newCurrnetApplicantInfo.applicant_information.status = {
    //   //   is_printed_arrived,
    //   //   is_submit,
    //   // };

    //   return {
    //     ...state,
    //     applicantsList: newApplicantsList,
    //     currnetApplicantInfo: newCurrnetApplicantInfo,
    //   };
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
