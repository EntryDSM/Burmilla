export interface ApiPayload<T = null> {
    data?: T;
    status?: number;
  }
  
  export interface LoginPayload {
    email: string;
    password: string;
  }
  
  export interface RefreshTokenPayload {
    refreshToken: string;
  }
  
  export interface Tokens {
    access_token?: string;
    refresh_token?: string;
  }
  
  export interface GetStatisticsPayload {
    area: string;
  }
  
  interface ScoreDistribution {
    '141-150': number;
    '131-140': number;
    '121-130': number;
    '111-120': number;
    '101-110': number;
    '91-100': number;
    '81-90': number;
    '71-80': number;
    '-70': number;
    applicant_count: number;
    competition_rate: number;
  }
  
  export interface GetEachStatisticsResponse {
    meister_applicant?: ScoreDistribution;
    social_applicant?: ScoreDistribution;
    common_applicant?: ScoreDistribution;
    total_applicant_count: number;
    total_competition_rate: number;
  }
  
  export interface GetAllStatisticsResponse {
    daejeon?: GetEachStatisticsResponse;
    nationwide?: GetEachStatisticsResponse;
    total_applicant_count: number;
    total_competition_rate: number;
  }
  
  export type GetStatisticsResponse = GetEachStatisticsResponse &
    GetAllStatisticsResponse;
  
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
    name: string;
    email: string;
    is_daejeon: boolean;
    apply_type: string;
    is_arrived: boolean;
    is_paid: boolean;
    is_final_submit: boolean;
  }
  export interface GetApplicantsListResponse {
    max_index: number;
    user_per_page: number;
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
  