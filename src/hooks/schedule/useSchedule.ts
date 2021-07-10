import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
  setProcess,
  setIsEnd,
  setIsStart,
  setStatus,
  getStatus,
  setStartScheduleMonth,
  setStartScheduleDay,
  setEndScheduleMonth,
  setEndScheduleDay,
  setFirstScheduleMonth,
  setFirstScheduleDay,
  setInterviewScheduleMonth,
  setInterviewScheduleDay,
  setSecondScheduleMonth,
  setSecondScheduleDay,
  setStartDate,
  setEndDate,
  setFirstDate,
  setInterviewDate,
  setSecondDate,
  setSchedule,
} from '../../data/modules/redux/action/schedule';
import { scheduleUpdateTypes, processType } from '../../data/modules/redux/reducer/schedule/interface';
import { scheduleType } from '../../data/modules/redux/reducer/schedule/scheduleConstance';

const useSchedule = () => {
  const dispatch = useDispatch();
  const state = useSelectState().schedule;
  const setState = {
    setStatus: (payload: scheduleType) => dispatch(setStatus(payload)),
    setIsStart: (payload: boolean) => dispatch(setIsStart(payload)),
    setIsEnd: (payload: boolean) => dispatch(setIsEnd(payload)),
    setProcess: (payload: processType[]) => dispatch(setProcess(payload)),
    getStatus: () => dispatch(getStatus()),
    setStartScheduleMonth: (payload: number) => { 
      dispatch(setStartScheduleMonth(payload));
    },
    setStartScheduleDay: (payload: number) => { 
      dispatch(setStartScheduleDay(payload));
    },
    setEndScheduleMonth: (payload: number) => {
      dispatch(setEndScheduleMonth(payload));
    },
    setEndScheduleDay: (payload: number) => {
      dispatch(setEndScheduleDay(payload));
    },
    setFirstScheduleMonth: (payload: number) => {
      dispatch(setFirstScheduleMonth(payload));
    },
    setFirstScheduleDay: (payload: number) => {
      dispatch(setFirstScheduleDay(payload));
    },
    setInterviewScheduleMonth: (payload: number) => {
      dispatch(setInterviewScheduleMonth(payload));
    },
    setInterviewScheduleDay: (payload: number) => {
      dispatch(setInterviewScheduleDay(payload));
    },
    setSecondScheduleMonth: (payload: number) => {
      dispatch(setSecondScheduleMonth(payload));
    },
    setSecondScheduleDay: (payload: number) => {
      dispatch(setSecondScheduleDay(payload));
    },
    setStartDate: (payload: string) => {
      dispatch(setStartDate(payload))
    },
    setEndDate: (payload: string) => {
      dispatch(setEndDate(payload));
    },
    setFirstDate: (payload: string) => {
      dispatch(setFirstDate(payload))
    },
    setInterviewDate: (payload: string) => {
      dispatch(setInterviewDate(payload))
    },
    setSecondDate: (payload: string) => {
      dispatch(setSecondDate(payload))
    },
    setSchedule: (payload: { 
      schedules: Array<scheduleUpdateTypes>; 
    }) => {
      dispatch(setSchedule(payload))
    },
  };
  return {
    state,
    setState,
  };
};

export default useSchedule;
