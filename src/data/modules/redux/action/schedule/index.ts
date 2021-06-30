import { UpdateScheduleProcessTimeType } from '../../reducer/schedule/interface';
import { scheduleType } from '../../reducer/schedule/scheduleConstance';
import {
    STATUS,
    STATUS_SUCCESS,
    STATUS_FAILURE,
    IS_START,
    IS_END,
    PROCESS,
    GET_STATUS,
    UPDATE_SCHEDULE_STATUS,
    UPDATE_SCHEDULE_STATUS_ASYNC
} from './interface';
import {
    ApiPayload,
} from "../../../../api/apiTypes";

export const setStatus = (payload: scheduleType) => ({
    type: STATUS,
    payload
})

export const setProcess = (payload: Object) => ({
    type: PROCESS,
    payload
})

export const setIsStart = (payload: boolean) => ({
  type: IS_START,
  payload,
});
  
export const setIsEnd = (payload: boolean) => ({
  type: IS_END,
  payload,
});

export const getStatusSuccess = (payload: {
  schedules: Array<UpdateScheduleProcessTimeType>;
  current_status: string;
}) => ({
  type: STATUS_SUCCESS,
  payload,
});
  
export const getStatusFailure = (payload: number) => ({
  type: STATUS_FAILURE,
  payload,
});

export const getStatus = () => ({
    type: GET_STATUS,
});

export type updateScheduleStatusType =
  | typeof UPDATE_SCHEDULE_STATUS
  | typeof UPDATE_SCHEDULE_STATUS_ASYNC;

export type updateScheduleStatusPayload = ApiPayload &
  UpdateScheduleProcessTimeType;

export interface UpdateScheduleStatus {
  type: updateScheduleStatusType;
  payload: updateScheduleStatusPayload;
}

export const updateScheduleStatusAction = (
  payload: updateScheduleStatusPayload,
): UpdateScheduleStatus => ({
  type: UPDATE_SCHEDULE_STATUS,
  payload,
});

export { IS_START, IS_END, STATUS, PROCESS };
export type scheduleActionType = 
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setProcess>
  | ReturnType<typeof setIsStart>
  | ReturnType<typeof setIsEnd>
  | ReturnType<typeof getStatusSuccess>
  | ReturnType<typeof getStatusFailure>
  | ReturnType<typeof getStatus>
  | ReturnType<typeof updateScheduleStatusAction>
  | UpdateScheduleStatus;