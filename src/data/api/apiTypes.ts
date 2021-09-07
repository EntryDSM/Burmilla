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
    access_token?: string | null;
    refresh_token?: string | null;
  }

  // export interface RefreshToken {
  //   refresh_token: string;
  // }

  // export interface RefreshResponse {
  //   access_token: string;
  // }

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
  
  export interface ApplicantListItem {
    receipt_code: number;
    name: string;
    is_daejeon: boolean;
    application_type: string;
    is_printed_arrived: boolean;
    is_submit: boolean;
    email: string;
  }

  export interface GetApplicantsListResponse {
    total_elements: number;
    total_pages: number;
    applicants_information_responses: ApplicantListItem[];
  }
  
  export interface GetApplicantInfoPayload {
    receipt_code?: number;
  }
  
  export interface ApplicantStatus {
    printed_arrived: boolean;
    submit: boolean;
  }
  
  export interface ApplicantPersonalData {
    photo_file_name: string;
    name: string;
    email: string;
    birth_date: string;
    school_name: string;
    educational_status: string;
    application_type: string;
    address: string;
    detail_address: string;
    telephone_number: string;
    parent_tel: string;
    school_tel: string;
    home_tel: string;
    graduated: boolean;
  }
  
  export interface ApplicantEvaluation {
    volunteer_time: number;
    conversion_score: number;
    day_absence_count: number;
    lecture_absence_count: number;
    early_leave_count: number;
    lateness_count: number;
    self_introduce: string;
    study_plan: string;
    average_score: number;
  }
  
  export interface GetApplicantInfoResponse {
    submitted_applicant?: {
      status: ApplicantStatus;
      personal_data: ApplicantPersonalData;
      evaluation: ApplicantEvaluation;
    };
    not_submitted_applicant?: {
      email: string;
      applicant_tel: string;
      parent_tel: string;
      home_tel?: string;
      school_tel?: string;
    };
  }

  export interface UpdateApplicantStatusPayload {
    is_printed_arrived?: boolean;
   }
  
  export interface DownloadExcelResponse {
    file_url: string;
  }
  