import { processTimeType } from '../../reducer/schedule/interface';
import { error } from "../../../../../models/error";
import { scheduleType } from '../../reducer/schedule/scheduleConstance';
import {
  IS_END,
  IS_START,
  STATUS,
  PROCESS,
  STATUS_SUCCESS,
  STATUS_FAILURE,
  GET_STATUS,
  SET_SCHEDULE,
  SET_SCHEDULE_SUCCESS,
  SET_SCHEDULE_FAILURE,
} from './interface';

export const setStatus = (payload: scheduleType) => ({
  type: STATUS,
  payload,
});

export const setProcess = (payload: Object) => ({
  type: PROCESS,
  payload,
});

export const setIsStart = (payload: boolean) => ({
  type: IS_START,
  payload,
});

export const setIsEnd = (payload: boolean) => ({
  type: IS_END,
  payload,
});

export const getStatusSuccess = (payload: {
  schedules: Array<processTimeType>;
  current_status: string;
}) => ({
  type: STATUS_SUCCESS,
  payload,
});

export const getStatusFailure = (payload: error) => ({
  type: STATUS_FAILURE,
  payload,
});

export const getStatus = () => ({
  type: GET_STATUS,
});

export const setSchedule = (payload: {
  schedules: Array<processTimeType>;
}) => ({
  type: SET_SCHEDULE,
  payload
});

export const setScheduleSuccess = () => ({
  type: SET_SCHEDULE_SUCCESS
});

export const setScheduleFailure = (payload: error) => ({
  type: SET_SCHEDULE_FAILURE,
  payload
})

export { IS_END, IS_START, STATUS, PROCESS, SET_SCHEDULE };
export type scheduleActionType =
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setProcess>
  | ReturnType<typeof setIsStart>
  | ReturnType<typeof setIsEnd>
  | ReturnType<typeof getStatusSuccess>
  | ReturnType<typeof getStatusFailure>
  | ReturnType<typeof getStatus>
  | ReturnType<typeof setSchedule>
  | ReturnType<typeof setScheduleSuccess>
  | ReturnType<typeof setScheduleFailure>;
