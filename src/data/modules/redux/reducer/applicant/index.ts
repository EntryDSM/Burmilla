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
  // currnetApplicantInfo: {
  //   submitted_applicant: {
  //     status: {
  //       is_printed_arrived: false,
  //       is_submit: false,
  //     },
  //     personal_data: {
  //       photo_file_name: '',
  //       name: '',
  //       birth_date: '',
  //       school_name: '',
  //       is_graduated: false,
  //       educational_status: '',
  //       application_type: '',
  //       address: '',
  //       detail_address: '',
  //       email: '',
  //       telephone_number: '',
  //       parent_tel: '',
  //       school_tel: '',
  //       home_tel: '',
  //     },
  //     evaluation: {
  //       volunteer_time: 0,
  //       conversion_score: 0,
  //       day_absence_count: 0,
  //       lecture_absence_count: 0,
  //       early_leave_count: 0,
  //       lateness_count: 0,
  //       self_introduce: '',
  //       study_plan: '',
  //     },
  //   },
  //   not_submitted_applicant: {
  //     email: '',
  //     telephone_number: 0,
  //     parent_tel: 0,
  //     home_tel: 0,
  //     school_tel: 0,
  //   }
  // },
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
        currnetApplicantInfo: null,
        // currnetApplicantInfo: {
        //   submitted_applicant: {
        //     status: {
        //       is_printed_arrived: action.payload.submitted_applicant.status.is_printed_arrived,
        //       is_submit: action.payload.submitted_applicant.status.is_submit,
        //     },
        //     personal_data: {
        //       photo_file_name: action.payload.submitted_applicant.personal_data.photo_file_name,
        //       name: action.payload.submitted_applicant.personal_data.name,
        //       birth_date: action.payload.submitted_applicant.personal_data.birth_date,
        //       school_name: action.payload.submitted_applicant.personal_data.school_name,
        //       is_graduated: action.payload.submitted_applicant.personal_data.is_graduated,
        //       educational_status: action.payload.submitted_applicant.personal_data.educational_status,
        //       application_type: action.payload.submitted_applicant.personal_data.application_type,
        //       address: action.payload.submitted_applicant.personal_data.address,
        //       detail_address: action.payload.submitted_applicant.personal_data.detail_address,
        //       email: action.payload.submitted_applicant.personal_data.email,
        //       telephone_number: action.payload.submitted_applicant.personal_data.telephone_number,
        //       parent_tel: action.payload.submitted_applicant.personal_data.parent_tel,
        //       school_tel: action.payload.submitted_applicant.personal_data.school_name,
        //       home_tel: action.payload.submitted_applicant.personal_data.home_tel,
        //     },
        //     evaluation: {
        //       volunteer_time: action.payload.submitted_applicant.evaluation.volunteer_time,
        //       conversion_score: action.payload.submitted_applicant.evaluation.conversion_score,
        //       day_absence_count: action.payload.submitted_applicant.evaluation.day_absence_count,
        //       lecture_absence_count: action.payload.submitted_applicant.evaluation.lecture_absence_count,
        //       early_leave_count: action.payload.submitted_applicant.evaluation.early_leave_count,
        //       lateness_count: action.payload.submitted_applicant.evaluation.lateness_count,
        //       self_introduce: action.payload.submitted_applicant.evaluation.self_introduce,
        //       study_plan: action.payload.submitted_applicant.evaluation.study_plan,
        //     },
        //   },
        //   not_submitted_applicant: {
        //     email: action.payload.not_submitted_applicant.email,
        //     telephone_number: action.payload.not_submitted_applicant.telephone_number,
        //     parent_tel: action.payload.not_submitted_applicant.parent_tel,
        //     home_tel: action.payload.not_submitted_applicant.home_tel,
        //     school_tel: action.payload.not_submitted_applicant.school_tel,
        //   }
        // },
      };
    }
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
