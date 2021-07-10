import { processTimeType, scheduleUpdateTypes } from '../../reducer/schedule/interface';
import { error } from "../../../../../models/error";
import { scheduleType } from '../../reducer/schedule/scheduleConstance';
import {
  IS_END,
  IS_START,
  STATUS,
  PROCESS,
  GET_STATUS_SUCCESS,
  GET_STATUS_FAILURE,
  GET_STATUS,
  START_SCHEDULE_MONTH,
  START_SCHEDULE_DAY,
  END_SCHEDULE_MONTH,
  END_SCHEDULE_DAY,
  FIRST_SCHEDULE_MONTH,
  FIRST_SCHEDULE_DAY,
  INTERVIEW_SCHEDULE_MONTH,
  INTERVIEW_SCHEDULE_DAY,
  SECOND_SCHEDULE_MONTH,
  SECOND_SCHEDULE_DAY,
  START_SCHEDULE_DATE,
  END_SCHEDULE_DATE,
  FIRST_SCHEDULE_DATE,
  INTERVIEW_SCHEDULE_DATE,
  SECOND_SCHEDULE_DATE,
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
  schedules: processTimeType[];
  current_status: string;
}) => ({
  type: GET_STATUS_SUCCESS,
  payload,
});

export const getStatusFailure = (payload: error) => ({
  type: GET_STATUS_FAILURE,
  payload,
});

export const getStatus = () => ({
  type: GET_STATUS,
});

export const setStartScheduleMonth = (payload: number) => ({
  type: START_SCHEDULE_MONTH,
  payload,
});

export const setStartScheduleDay = (payload: number) => ({
  type: START_SCHEDULE_DAY,
  payload,
});

export const setEndScheduleMonth = (payload: number) => ({
  type: END_SCHEDULE_MONTH,
  payload,
});

export const setEndScheduleDay = (payload: number) => ({
  type: END_SCHEDULE_DAY,
  payload,
});

export const setFirstScheduleMonth = (payload: number) => ({
  type: FIRST_SCHEDULE_MONTH,
  payload,
});

export const setFirstScheduleDay = (payload: number) => ({
  type: FIRST_SCHEDULE_DAY,
  payload,
});

export const setInterviewScheduleMonth = (payload: number) => ({
  type: INTERVIEW_SCHEDULE_MONTH,
  payload,
});

export const setInterviewScheduleDay = (payload: number) => ({
  type: INTERVIEW_SCHEDULE_DAY,
  payload,
});

export const setSecondScheduleMonth = (payload: number) => ({
  type: SECOND_SCHEDULE_MONTH,
  payload,
});

export const setSecondScheduleDay = (payload: number) => ({
  type: SECOND_SCHEDULE_DAY,
  payload,
});

export const setStartDate = (payload: string) => ({
  type: START_SCHEDULE_DATE,
  payload,
})

export const setEndDate = (payload: string) => ({
  type: END_SCHEDULE_DATE,
  payload,
})

export const setFirstDate = (payload: string) => ({
  type: FIRST_SCHEDULE_DATE,
  payload,
})

export const setInterviewDate = (payload: string) => ({
  type: INTERVIEW_SCHEDULE_DATE,
  payload,
})

export const setSecondDate = (payload: string) => ({
  type: SECOND_SCHEDULE_DATE,
  payload,
})

export const setSchedule = (payload: {
  schedules: Array<scheduleUpdateTypes>;
}) => ({
  type: SET_SCHEDULE,
  payload,
});

export const setScheduleSuccess = () => ({
  type: SET_SCHEDULE_SUCCESS
});

export const setScheduleFailure = (payload: error) => ({
  type: SET_SCHEDULE_FAILURE,
  payload
})

export { IS_END, IS_START, STATUS, PROCESS };
export type scheduleActionType =
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setProcess>
  | ReturnType<typeof setIsStart>
  | ReturnType<typeof setIsEnd>
  | ReturnType<typeof getStatusSuccess>
  | ReturnType<typeof getStatusFailure>
  | ReturnType<typeof getStatus>
  | ReturnType<typeof setStartScheduleMonth>
  | ReturnType<typeof setStartScheduleDay>
  | ReturnType<typeof setEndScheduleMonth>
  | ReturnType<typeof setEndScheduleDay>
  | ReturnType<typeof setFirstScheduleMonth>
  | ReturnType<typeof setFirstScheduleDay>
  | ReturnType<typeof setInterviewScheduleMonth>
  | ReturnType<typeof setInterviewScheduleDay>
  | ReturnType<typeof setSecondScheduleMonth>
  | ReturnType<typeof setSecondScheduleDay>
  | ReturnType<typeof setStartDate>
  | ReturnType<typeof setEndDate>
  | ReturnType<typeof setFirstDate>
  | ReturnType<typeof setInterviewDate>
  | ReturnType<typeof setSecondDate>
  | ReturnType<typeof setSchedule>
  | ReturnType<typeof setScheduleSuccess>
  | ReturnType<typeof setScheduleFailure>;
