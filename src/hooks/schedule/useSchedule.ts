import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
    setStatus,
    setMonthDate,
    setDayDate
  } from '../../data/modules/redux/action/schedule';
import { scheduleType } from '../../data/modules/redux/reducer/schedule/scheduleConstance'

const useSchedule = () => {
    const dispatch = useDispatch();
    const state = useSelectState().schedule;
    const setState = {
        setStatus: (payload: scheduleType) => dispatch(setStatus(payload)),
        setMonthDate: (payload: string) => dispatch(setMonthDate(payload)),
        setDayDate: (payload: string) => dispatch(setDayDate(payload)),
    };
    return {
        state,
        setState
    }
}

export default useSchedule;