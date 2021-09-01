import { 
  SET_FILTER,
  GET_APPLICANT_INFO,
  GET_APPLICANT_INFO_SUCCESS,
  GET_APPLICANT_INFO_FAILURE,
  GET_APPLICANTS_LIST,
  GET_APPLICANTS_LIST_SUCCESS,
  GET_APPLICANTS_LIST_FAILURE,
  UPDATE_APPLICANT_STATUS,
  UPDATE_APPLICANT_STATUS_SUCCESS,
  UPDATE_APPLICANT_STATUS_FAILURE,
  UPDATE_APPLICANT_SUBMIT_STATUS,
  UPDATE_APPLICANT_SUBMIT_STATUS_SUCCESS,
  UPDATE_APPLICANT_SUBMIT_STATUS_FAILURE,
  UPDATE_APPLICANT_LIST,
  UPDATE_APPLICANT_LIST_SUCCESS,
  UPDATE_APPLICANT_LIST_FAILURE,
  RESET_UPDATE_STATUS,
} from "./interface";
import { 
  GetApplicantsListPayload,
  GetApplicantsListResponse,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
 } from "../../../../api/apiTypes"; 
import { error } from "../../../../../models/error";
import { createAction } from 'typesafe-actions';

export const setFilter = createAction(SET_FILTER)<GetApplicantsListPayload>();
export const getApplicantInfo = createAction(GET_APPLICANT_INFO)<GetApplicantInfoPayload>();
export const getApplicantInfoSuccess = createAction(GET_APPLICANT_INFO_SUCCESS)<GetApplicantInfoResponse>();
export const getApplicantInfoFailure = createAction(GET_APPLICANT_INFO_FAILURE)<error>();
export const getApplicantsList = createAction(GET_APPLICANTS_LIST)<GetApplicantsListPayload>();
export const getApplicantsListSuccess = createAction(GET_APPLICANTS_LIST_SUCCESS)<GetApplicantsListResponse>();
export const getApplicantsListFailure = createAction(GET_APPLICANTS_LIST_FAILURE)<error>();
export const updateApplicantStatus = createAction(UPDATE_APPLICANT_STATUS)<UpdateApplicantStatusPayload>();
export const updateApplicantStatusSuccess = createAction(UPDATE_APPLICANT_STATUS_SUCCESS)();
export const updateApplicantStatusFailure = createAction(UPDATE_APPLICANT_STATUS_FAILURE)<error>();

export const updateApplicantSubmitStatus = createAction(UPDATE_APPLICANT_SUBMIT_STATUS)<string>();
export const updateApplicantSubmitStatusSuccess = createAction(UPDATE_APPLICANT_SUBMIT_STATUS_SUCCESS)<string>();
export const updateApplicantSubmitStatusFailure = createAction(UPDATE_APPLICANT_SUBMIT_STATUS_FAILURE)<string>();
export const updateApplicantList = createAction(UPDATE_APPLICANT_LIST)<string>();
export const updateApplicantListSuccess = createAction(UPDATE_APPLICANT_LIST_SUCCESS)<string>();
export const updateApplicantListFailure = createAction(UPDATE_APPLICANT_LIST_FAILURE)<string>();

export const resetUpdateStatus = createAction(RESET_UPDATE_STATUS)<null>();

export type applicantActionType = 
  | ReturnType<typeof setFilter>
  | ReturnType<typeof getApplicantInfo>
  | ReturnType<typeof getApplicantInfoSuccess>
  | ReturnType<typeof getApplicantInfoFailure>
  | ReturnType<typeof getApplicantsList>
  | ReturnType<typeof getApplicantsListSuccess>
  | ReturnType<typeof getApplicantsListFailure>
  | ReturnType<typeof updateApplicantStatus>
  | ReturnType<typeof updateApplicantStatusSuccess>
  | ReturnType<typeof updateApplicantStatusFailure>
  | ReturnType<typeof resetUpdateStatus>;
// import {
//   ApiPayload,
//   GetApplicantInfoPayload,
//   GetApplicantInfoResponse,
//   GetApplicantsListPayload,
//   GetApplicantsListResponse,
//   UpdateApplicantStatusPayload,
// } from '../../../../api/apiTypes';

// export const SET_FILTER = 'SET_FILTER';
// export const GET_APPLICANT_INFO = 'GET_APPLICANT_INFO';
// export const GET_APPLICANT_INFO_ASYNC = 'GET_APPLICANT_INFO_ASYNC';
// export const GET_APPLICANTS_LIST = 'GET_APPLICANTS_LIST';
// export const GET_APPLICANTS_LIST_ASYNC = 'GET_APPLICANTS_LIST_ASYNC';
// export const UPDATE_APPLICANT_STATUS = 'UPDATE_APPLICANT_STATUS';
// export const UPDATE_APPLICANT_STATUS_ASYNC = 'UPDATE_APPLICANT_STATUS_ASYNC';
// export const UPDATE_APPLICANT_SUBMIT_STATUS = 'UPDATE_APPLICANT_SUBMIT_STATUS';
// export const UPDATE_APPLICANT_SUBMIT_STATUS_ASYNC = 'UPDATE_APPLICANT_SUBMIT_STATUS_ASYNC';
// export const UPDATE_APPLICANT_LIST = 'UPDATE_APPLICANT_LIST';
// export const RESET_UPDATE_STATUS = 'RESET_UPDATE_STATUS';

// export type setFilterType = typeof SET_FILTER;
// export type setFilterPayload = GetApplicantsListPayload;
// export interface SetFilter {
//   type: setFilterType;
//   payload: setFilterPayload;
// }
// export const setFilterAction = (payload: setFilterPayload): SetFilter => ({
//   type: SET_FILTER,
//   payload,
// });

// export type getApplicantInfoType =
//   | typeof GET_APPLICANT_INFO
//   | typeof GET_APPLICANT_INFO_ASYNC;
// export type getApplicantInfoPayload = ApiPayload<GetApplicantInfoResponse> &
//   GetApplicantInfoPayload;
// export interface GetApplicantInfo {
//   type: getApplicantInfoType;
//   payload: getApplicantInfoPayload;
// }
// export const getApplicantInfoAction = (
//   payload: getApplicantInfoPayload,
// ): GetApplicantInfo => ({
//   type: GET_APPLICANT_INFO,
//   payload,
// });

// export type getApplicantsListType =
//   | typeof GET_APPLICANTS_LIST
//   | typeof GET_APPLICANTS_LIST_ASYNC;
// export type getApplicantsListPayload = ApiPayload<GetApplicantsListResponse> &
//   GetApplicantsListPayload;
// export interface GetApplicantsList {
//   type: getApplicantsListType;
//   payload: getApplicantsListPayload;
// }
// export const getApplicantsListAction = (
//   payload: getApplicantsListPayload,
// ): GetApplicantsList => ({
//   type: GET_APPLICANTS_LIST,
//   payload,
// });

// export type updateApplicantStatusType =
//   | typeof UPDATE_APPLICANT_STATUS
//   | typeof UPDATE_APPLICANT_STATUS_ASYNC;
// export type updateApplicantStatusPayload = ApiPayload &
//   UpdateApplicantStatusPayload;
// export interface UpdateApplicantStatus {
//   type: updateApplicantStatusType;
//   payload: updateApplicantStatusPayload;
// }
// export const updateApplicantStatusAction = (
//   payload: updateApplicantStatusPayload,
// ): UpdateApplicantStatus => ({
//   type: UPDATE_APPLICANT_STATUS,
//   payload,
// });

// export type updateApplicantSubmitStatusType = 
//   | typeof UPDATE_APPLICANT_SUBMIT_STATUS
//   | typeof UPDATE_APPLICANT_SUBMIT_STATUS_ASYNC;
// export type updateApplicantSubmitStatusPayload = ApiPayload

// export interface UpdateApplicantSubmitStatus {
//   type: updateApplicantSubmitStatusType;
//   payload: updateApplicantSubmitStatusPayload
// }
// export const updateApplicantSubmitStatusAction = (
//   payload: updateApplicantSubmitStatusPayload,
// ): UpdateApplicantSubmitStatus => ({
//   type: UPDATE_APPLICANT_SUBMIT_STATUS,
//   payload,
// });

// export type UpdateApplicantListPayload = {
//   is_printed_arrived?: boolean;
//   is_submit?: boolean;
// };
// interface UpdateApplicantList {
//   type: typeof UPDATE_APPLICANT_LIST;
//   payload: UpdateApplicantListPayload;
// }
// export const updateApplicantListAction = (
//   payload: UpdateApplicantListPayload,
// ): UpdateApplicantList => ({
//   type: UPDATE_APPLICANT_LIST,
//   payload,
// });

// interface ResetUpdateStatus {
//   type: typeof RESET_UPDATE_STATUS;
//   payload: null;
// }
// export const resetUpdateStatusAction = (): ResetUpdateStatus => ({
//   type: RESET_UPDATE_STATUS,
//   payload: null,
// });

// export type ApplicantActions =
//   | SetFilter
//   | GetApplicantInfo
//   | GetApplicantsList
//   | UpdateApplicantStatus
//   | UpdateApplicantList
//   | ResetUpdateStatus;

