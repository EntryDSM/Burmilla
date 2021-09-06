import { 
  SET_FILTER,
  SET_APPLICANT_INFO_APPEAR,
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
export const setApplicantInfoAppear = createAction(SET_APPLICANT_INFO_APPEAR)<boolean>();
export const getApplicantInfo = createAction(GET_APPLICANT_INFO)<GetApplicantInfoPayload>();
export const getApplicantInfoSuccess = createAction(GET_APPLICANT_INFO_SUCCESS)<GetApplicantInfoResponse>();
export const getApplicantInfoFailure = createAction(GET_APPLICANT_INFO_FAILURE)<GetApplicantInfoResponse>();
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
  | ReturnType<typeof setApplicantInfoAppear>
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