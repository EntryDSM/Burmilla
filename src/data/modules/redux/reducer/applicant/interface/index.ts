import { error } from "../../../../../../models/error";
import { ApplicantListItem } from "../../../../../api/apiTypes";

export interface ApplicantState {
 getApplicantsListStatus: 0 | 200| 400 | 401 | 403 | 404;
 getApplicantInfoStatus: 0 | 200 | 401 | 403 | 423;
 updateApplicantStatusStatus: 0 | 204 | 400 | 401 | 403;
 filters: getApplicantsLists;
 applicantsList: getApplicantsListResponse;
 currnetApplicantInfo: getApplicantInfoResponse;
 error: error;
}

export interface getApplicantsLists {
 size?: number;
 page?: number;
 is_daejeon?: boolean;
 is_nationwide?: boolean;
 is_printed_arrived?: boolean;
 is_common?: boolean;
 is_meister?: boolean;
 is_social?: boolean;
 receipt_code?: number;
 telephone?: number;
 name?: string;
}

export interface getApplicantsListResponse {
 total_elements: number;
 total_pages: number;
 applicants_information_responses: Array<ApplicantListItem>;
}

export interface getApplicantInfoTypes {
 receipt_code?: number;
}

export interface getApplicantInfoResponse {
   submitted_applicant: {
    status: applicantStatus;
    personal_data:applicantPersonalData;
    evaluation: applicantEvaluation;
   };
   not_submitted_applicant: {
    email: string;
    telephone_number: number;
    parent_tel: number;
    home_tel: number;
    school_tel?: number;
   };
}
  
export interface applicantStatus {
 is_printed_arrived: boolean;
 is_submit: boolean;
}
  
export interface applicantPersonalData {
 photo_file_name: string;
 name: string;
 birth_date: string;
 school_name: string;
 is_graduated: boolean;
 educational_status: string;
 application_type: string;
 address: string;
 detail_address: string;
 email: string;
 telephone_number: string;
 parent_tel: string;
 school_tel: string;
 home_tel: string;
}
  
export interface applicantEvaluation {
 volunteer_time: number;
 conversion_score: number;
 day_absence_count: number;
 lecture_absence_count: number;
 early_leave_count: number;
 lateness_count: number;
 self_introduce: string;
 study_plan: string;
}
