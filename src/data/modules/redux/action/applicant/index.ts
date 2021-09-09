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
  CHECK_PASSWORD,
  CHECK_PASSWORD_SUCCESS,
  CHECK_PASSWORD_FAILURE,
  DELETE_APPLICANT_TABLE,
  DELETE_APPLICANT_TABLE_SUCCESS,
  DELETE_APPLICANT_TABLE_FAILURE,
} from "./interface";
import { 
  GetApplicantsListPayload,
  GetApplicantsListResponse,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
  UpdateApplicantSubmitStatusPayload,
  CheckPasswordRequest
 } from "../../../../api/apiTypes"; 
import { error } from "../../../../../models/error";
import { createAction } from 'typesafe-actions';

export const setFilter = createAction(SET_FILTER)<GetApplicantsListPayload>();
export const getApplicantInfo = createAction(GET_APPLICANT_INFO)<GetApplicantInfoPayload>();
export const getApplicantInfoSuccess = createAction(GET_APPLICANT_INFO_SUCCESS)<GetApplicantInfoResponse>();
export const getApplicantInfoFailure = createAction(GET_APPLICANT_INFO_FAILURE)<GetApplicantInfoResponse>();
export const getApplicantsList = createAction(GET_APPLICANTS_LIST)<GetApplicantsListPayload>();
export const getApplicantsListSuccess = createAction(GET_APPLICANTS_LIST_SUCCESS)<GetApplicantsListResponse>();
export const getApplicantsListFailure = createAction(GET_APPLICANTS_LIST_FAILURE)<error>();
export const updateApplicantStatus = createAction(UPDATE_APPLICANT_STATUS)<UpdateApplicantStatusPayload>();
export const updateApplicantStatusSuccess = createAction(UPDATE_APPLICANT_STATUS_SUCCESS)();
export const updateApplicantStatusFailure = createAction(UPDATE_APPLICANT_STATUS_FAILURE)<error>();
export const updateApplicantSubmitStatus = createAction(UPDATE_APPLICANT_SUBMIT_STATUS)<UpdateApplicantSubmitStatusPayload>();
export const updateApplicantSubmitStatusSuccess = createAction(UPDATE_APPLICANT_SUBMIT_STATUS_SUCCESS)();
export const updateApplicantSubmitStatusFailure = createAction(UPDATE_APPLICANT_SUBMIT_STATUS_FAILURE)<error>();
export const checkPassword = createAction(CHECK_PASSWORD)<CheckPasswordRequest>();
export const checkPasswordSuccess = createAction(CHECK_PASSWORD_SUCCESS)<boolean>();
export const checkPasswordFailure = createAction(CHECK_PASSWORD_FAILURE)<error>();
export const deleteApplicantTable = createAction(DELETE_APPLICANT_TABLE)();
export const deleteApplicantTableSuccess = createAction(DELETE_APPLICANT_TABLE_SUCCESS)<boolean>();
export const deleteApplicantTableFailure = createAction(DELETE_APPLICANT_TABLE_FAILURE)<error>();

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
  | ReturnType<typeof updateApplicantSubmitStatus>
  | ReturnType<typeof updateApplicantSubmitStatusSuccess>
  | ReturnType<typeof updateApplicantSubmitStatusFailure>
  | ReturnType<typeof checkPassword>
  | ReturnType<typeof checkPasswordSuccess>
  | ReturnType<typeof checkPasswordFailure>
  | ReturnType<typeof deleteApplicantTable>
  | ReturnType<typeof deleteApplicantTableSuccess>
  | ReturnType<typeof deleteApplicantTableFailure>