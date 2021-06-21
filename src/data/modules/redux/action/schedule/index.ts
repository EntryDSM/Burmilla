import { scheduleType } from '../../reducer/schedule/scheduleConstance'
import { STATUS, MONTH_DATE, DAY_DATE } from './interface';

export const setStatus = (payload: scheduleType) => ({
    type: STATUS,
    payload
})

export const setMonthDate = (payload: string) => ({
    type: MONTH_DATE,
    payload,
})

export const setDayDate = (payload: string) => ({
    type: DAY_DATE,
    payload,
})

export { STATUS, MONTH_DATE, DAY_DATE };
export type scheduleActionType = 
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setMonthDate>
  | ReturnType<typeof setDayDate>