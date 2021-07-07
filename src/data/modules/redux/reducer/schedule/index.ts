import IScheduleState from './interface';
import { IS_END, IS_START, PROCESS, STATUS, SET_SCHEDULE, scheduleActionType } from '../../action/schedule';
import scheduleConstance, { NOT_APPLICATION_PERIOD, scheduleType } from './scheduleConstance';
import { STATUS_FAILURE, STATUS_SUCCESS, SET_SCHEDULE_SUCCESS, SET_SCHEDULE_FAILURE } from '../../action/schedule/interface';

const InitialState: IScheduleState = {
  status: NOT_APPLICATION_PERIOD,
  isEnd: false,
  isStart: true,
  processes: scheduleConstance,
  date: [
    {
      year: '2022',
      type: 'START_DATE',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'END_DATE',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'FIRST_ANNOUNCEMENT',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'SECOND_ANNOUNCEMENT',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'INTERVIEW',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'NOT_APPLICATION_PERIOD',
      date: '2021-10-20',
    },
  ],  
  error: null,
};

const scheduleReducer = (state: IScheduleState = InitialState, action: scheduleActionType): IScheduleState => {
  switch (action.type) {
    case STATUS: {
      return { ...state, status: action.payload };
    }
    case IS_START: {
      return { ...state, isStart: action.payload };
    }
    case IS_END: {
      return { ...state, isEnd: action.payload };
    }
    case PROCESS: {
      return { ...state, processes: action.payload };
    }
    case STATUS_SUCCESS: {
      return {
        ...state,
        date: action.payload.schedules,
        status: action.payload.current_status as scheduleType,
      };
    }
    case STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_SCHEDULE: {
      return {
        ...state,
        date: action.payload.schedules,
      };
    }
    case SET_SCHEDULE_SUCCESS: {
      return {
        ...state,
      }
    }
    case SET_SCHEDULE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    default: {
      return state;
    }
  }
};

export default scheduleReducer;
