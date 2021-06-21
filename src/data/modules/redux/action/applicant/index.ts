import {
  ApiPayload,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  GetApplicantsListPayload,
  GetApplicantsListResponse,
  UpdateApplicantStatusPayload,
} from '../../../../api/apiTypes';

export const SET_FILTER = 'SET_FILTER';
export const GET_APPLICANT_INFO = 'GET_APPLICANT_INFO';
export const GET_APPLICANT_INFO_ASYNC = 'GET_APPLICANT_INFO_ASYNC';
export const GET_APPLICANTS_LIST = 'GET_APPLICANTS_LIST';
export const GET_APPLICANTS_LIST_ASYNC = 'GET_APPLICANTS_LIST_ASYNC';
export const UPDATE_APPLICANT_STATUS = 'UPDATE_APPLICANT_STATUS';
export const UPDATE_APPLICANT_STATUS_ASYNC = 'UPDATE_APPLICANT_STATUS_ASYNC';
export const UPDATE_APPLICANT_LIST = 'UPDATE_APPLICANT_LIST';
export const RESET_UPDATE_STATUS = 'RESET_UPDATE_STATUS';

export type setFilterType = typeof SET_FILTER;
export type setFilterPayload = GetApplicantsListPayload;
export interface SetFilter {
  type: setFilterType;
  payload: setFilterPayload;
}
export const setFilterAction = (payload: setFilterPayload): SetFilter => ({
  type: SET_FILTER,
  payload,
});

export type getApplicantInfoType =
  | typeof GET_APPLICANT_INFO
  | typeof GET_APPLICANT_INFO_ASYNC;
export type getApplicantInfoPayload = ApiPayload<GetApplicantInfoResponse> &
  GetApplicantInfoPayload;
export interface GetApplicantInfo {
  type: getApplicantInfoType;
  payload: getApplicantInfoPayload;
}
export const getApplicantInfoAction = (
  payload: getApplicantInfoPayload,
): GetApplicantInfo => ({
  type: GET_APPLICANT_INFO,
  payload,
});

export type getApplicantsListType =
  | typeof GET_APPLICANTS_LIST
  | typeof GET_APPLICANTS_LIST_ASYNC;
export type getApplicantsListPayload = ApiPayload<GetApplicantsListResponse> &
  GetApplicantsListPayload;
export interface GetApplicantsList {
  type: getApplicantsListType;
  payload: getApplicantsListPayload;
}
export const getApplicantsListAction = (
  payload: getApplicantsListPayload,
): GetApplicantsList => ({
  type: GET_APPLICANTS_LIST,
  payload,
});

export type updateApplicantStatusType =
  | typeof UPDATE_APPLICANT_STATUS
  | typeof UPDATE_APPLICANT_STATUS_ASYNC;
export type updateApplicantStatusPayload = ApiPayload &
  UpdateApplicantStatusPayload;
export interface UpdateApplicantStatus {
  type: updateApplicantStatusType;
  payload: updateApplicantStatusPayload;
}
export const updateApplicantStatusAction = (
  payload: updateApplicantStatusPayload,
): UpdateApplicantStatus => ({
  type: UPDATE_APPLICANT_STATUS,
  payload,
});

export type UpdateApplicantListPayload = {
  email: string;
  is_arrived?: boolean;
  is_paid?: boolean;
  is_final_submit?: boolean;
};
interface UpdateApplicantList {
  type: typeof UPDATE_APPLICANT_LIST;
  payload: UpdateApplicantListPayload;
}
export const updateApplicantListAction = (
  payload: UpdateApplicantListPayload,
): UpdateApplicantList => ({
  type: UPDATE_APPLICANT_LIST,
  payload,
});

interface ResetUpdateStatus {
  type: typeof RESET_UPDATE_STATUS;
  payload: null;
}
export const resetUpdateStatusAction = (): ResetUpdateStatus => ({
  type: RESET_UPDATE_STATUS,
  payload: null,
});

export type ApplicantActions =
  | SetFilter
  | GetApplicantInfo
  | GetApplicantsList
  | UpdateApplicantStatus
  | UpdateApplicantList
  | ResetUpdateStatus;
