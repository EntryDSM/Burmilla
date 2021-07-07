import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
  setProcess,
  setIsEnd,
  setIsStart,
  setStatus,
  getStatus,
  getStatusSuccess,
  // UpdateSchedulesPayload,
  setSchedule
} from '../../data/modules/redux/action/schedule';
import { processTimeType, processType } from '../../data/modules/redux/reducer/schedule/interface';
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
    getStatusSuccess: (payload: { schedules: Array<processTimeType>; current_status: string }) =>
      dispatch(getStatusSuccess(payload)),
    setSchedule: (payload: { schedules: Array<processTimeType> }) => {
      dispatch(setSchedule(payload))
    },
  };
  return {
    state,
    setState,
  };
};

export default useSchedule;
