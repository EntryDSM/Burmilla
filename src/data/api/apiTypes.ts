  export interface ApiPayload<T = null> {
    data?: T;
    status?: number;
  }
  
  export interface LoginPayload {
    id: string;
    password: string;
  }
  
  export interface RefreshTokenPayload {
    refreshToken: string;
  }
  
  export interface Tokens {
    access_token?: string;
    refresh_token?: string;
  }

  export interface GetSchedulesPayload {
    type: string; 
    date: string;
    process: string;
  }

  export interface UpdateSchedulesPayload {
    type: string; 
    date: string;
  }

  export interface GetSchedulesResponse {
    schedules: GetSchedulesPayload[];
    current_status: string;
  }

  export interface UpdateScheduleStatusPayload {
    schedules: UpdateSchedulesPayload[];
  }
  
  export interface CommonScoreDistribution {
    '158-170': number,
    '145-157': number,
    '132-144': number,
    '119-131': number,
    '106-118': number,
    '93-105': number,
    '80-92': number,
    '-79': number,
    common_count: number;
    common_competition_rate: number;
  }

  export interface SpecialScoreDistribution {
    '98-110': number,
    '85-97': number,
		'72-84': number,
		'59-71': number,
		'46-58': number,
		'33-45': number,
		'20-32': number,
		'-19': number,
    special_count: number,
    special_competition_rate: number,
  }
  
  export interface GetEachStatisticsResponse {
    total_applicant_count: number;
    total_competition_rate: number;
    common_score: CommonScoreDistribution;
    meister_score: SpecialScoreDistribution;
    social_score: SpecialScoreDistribution;
  }
  
  export interface GetApplicantsListPayload {
    index?: number;
    email?: string | null;
    receipt_code?: number | null;
    school_name?: string | null;
    applicant_tel?: number | null;
    name?: string | null;
    is_daejeon?: boolean | null;
    is_nationwide?: boolean | null;
    is_arrived?: boolean | null;
    is_paid?: boolean | null;
    is_common?: boolean | null;
    is_meister?: boolean | null;
    is_social?: boolean | null;
  }
  
  export interface ApplicantListItem {
    receipt_code: number;
    email: string;
    name: string;
    is_daejeon: boolean;
    application_type: string;
    is_printed_arrived: boolean;
    is_paid: boolean;
    is_submit: boolean;
  }
  export interface GetApplicantsListResponse {
    total_elements: number;
    total_pages: number;
    applicants_information: ApplicantListItem[];
  }
  
  export interface GetApplicantInfoPayload {
    email: string;
  }
  
  export interface ApplicantStatus {
    is_paid: boolean;
    is_arrived: boolean;
    is_final_submit: boolean;
  }
  
  export interface ApplicantPrivacy {
    user_photo: string;
    name: string;
    birth_date: string;
    school_name: string;
    grade_type: string;
    apply_type: string;
    address: string;
    detail_address: string;
    applicant_tel: string;
    parent_tel: string;
    school_tel: string;
    home_tel: string;
    email: string;
  }
  
  export interface ApplicantEvaluation {
    volunteer_time: number;
    conversion_score: number;
    full_absent_count: number;
    early_leave_count: number;
    late_count: number;
    period_absent_count: number;
    self_introduction: string;
    study_plan: string;
  }
  
  export interface GetApplicantInfoResponse {
    applicant_information?: {
      status: ApplicantStatus;
      privacy: ApplicantPrivacy;
      evaluation: ApplicantEvaluation;
    };
    applicant_contact?: {
      applicant_tel: number;
      email: string;
      parent_tel: number;
      home_tel: number;
      school_tel?: number;
    };
    school_tel?: number;
  }
  
  export interface UpdateApplicantStatusPayload {
    email: string;
    is_arrived?: boolean;
    is_paid?: boolean;
    is_final_submit?: boolean;
  }
  
  export interface DownloadExcelResponse {
    file_url: string;
  }
  