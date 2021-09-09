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
  UPDATE_APPLICANT_SUBMIT_STATUS,
  UPDATE_APPLICANT_SUBMIT_STATUS_SUCCESS,
  UPDATE_APPLICANT_SUBMIT_STATUS_FAILURE,
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
  currnetApplicantInfo: {
      submitted_applicant: {
        status: {
          is_printed_arrived: false,
          is_submit: false,
        },
        personal_data: {
          photo_file_name: '',
          name: '',
          email: '',
          birth_date: '',
          school_name: '',
          educational_status: '',
          application_type: '',
          address: '',
          detail_address: '',
          telephone_number: '',
          parent_tel: '',
          school_tel: '',
          home_tel: '',
          graduated: false,
        },
        evaluation: {
          volunteer_time: 0,
          conversion_score: 0,
          day_absence_count: 0,
          lecture_absence_count: 0,
          early_leave_count: 0,
          lateness_count: 0,
          self_introduce: '',
          study_plan: '',
          average_score: 0,
        },
    },
      not_submitted_applicant: {
        email: '',
        applicant_tel: '',
        parent_tel: '',
        home_tel: '',
        school_tel: '',
    }
  },
  updateApplicantStatus: {
    receipt_code: null,
    is_printed_arrived: false,
  },
  updateApplicantSubmitStatus: {
    receipt_code: null,
  },
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
    case GET_APPLICANT_INFO_SUCCESS: {
      return {
        ...state,
        currnetApplicantInfo: {
          submitted_applicant: {
            status: action.payload.submitted_applicant.status,
            personal_data: action.payload.submitted_applicant.personal_data,
            evaluation: action.payload.submitted_applicant.evaluation
          },
        },
      };
    }
    case GET_APPLICANT_INFO_FAILURE: {
      return {
        ...state,
        currnetApplicantInfo: {
          not_submitted_applicant: action.payload.not_submitted_applicant
        },
      };
    }
    case UPDATE_APPLICANT_STATUS: { 
      return {
        ...state,
        updateApplicantStatus: {
          receipt_code: action.payload.receipt_code,
          is_printed_arrived: action.payload.is_printed_arrived
        },
      }
    }
    case UPDATE_APPLICANT_STATUS_SUCCESS: {
      return {
        ...state,
      }
    }
    case UPDATE_APPLICANT_STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case UPDATE_APPLICANT_SUBMIT_STATUS: { 
      return {
        ...state,
        updateApplicantSubmitStatus: action.payload.receipt_code
      }
    }
    case UPDATE_APPLICANT_SUBMIT_STATUS_SUCCESS: {
      return {
        ...state,
      }
    }
    case UPDATE_APPLICANT_SUBMIT_STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    
    default:
      return state;
  }
};

export default applicantReducer;
