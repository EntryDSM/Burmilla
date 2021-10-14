import IScheduleState from './interface';
import { IS_END, IS_START, PROCESS, STATUS, scheduleActionType } from '../../action/schedule';
import scheduleConstance, { NOT_APPLICATION_PERIOD, scheduleType } from './scheduleConstance';
import {
  GET_STATUS_FAILURE, 
  GET_STATUS_SUCCESS, 
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
  SET_SCHEDULE_FAILURE 
} from '../../action/schedule/interface';

const InitialState: IScheduleState = {
  status: NOT_APPLICATION_PERIOD,
  isEnd: false,
  isStart: true,
  processes: scheduleConstance,
  startScheduleMonth: 10,
  startScheduleDay: 5,
  endScheduleMonth: 10,
  endScheduleDay: 7,
  firstScheduleMonth: 10,
  firstScheduleDay: 9,
  interviewScheduleMonth: 10,
  interviewScheduleDay: 10,
  secondScheduleMonth: 10,
  secondScheduleDay: 11,
  scheduleDate: [
    {
      type: 'START_DATE',
      date: '2021-10-05',
    },
    {
      type: 'END_DATE',
      date: '2021-10-07',
    },
    {
      type: 'FIRST_ANNOUNCEMENT',
      date: '2021-10-09',
    },
    {
      type: 'INTERVIEW',
      date: '2021-10-10',
    },
    {
      type: 'SECOND_ANNOUNCEMENT',
      date: '2021-10-11',
    },
  ],
  startScheduleDate: '',
  endScheduleDate: '',
  firstScheduleDate: '',
  interviewScheduleDate: '',
  secondScheduleDate: '',
  date: [
    {
      type: 'START_DATE',
      date: '2022-10-31',
    },
    {
      type: 'END_DATE',
      date: '2022-10-31',
    },
    {
      type: 'FIRST_ANNOUNCEMENT',
      date: '2022-10-31',
    },
    {
      type: 'SECOND_ANNOUNCEMENT',
      date: '2022-10-31',
    },
    {
      type: 'INTERVIEW',
      date: '2022-10-31',
    },
    {
      type: 'NOT_APPLICATION_PERIOD',
      date: '2021-10-20',
    },
  ],  
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const scheduleReducer = (
  state: IScheduleState = InitialState, 
  action: scheduleActionType
): IScheduleState => {
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
    case GET_STATUS_SUCCESS: {
      return {
        ...state,
        date: action.payload.schedules,
        status: action.payload.current_status as scheduleType,
      };
    }
    case GET_STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case START_SCHEDULE_MONTH: {
      return {
        ...state,
        startScheduleMonth: action.payload,
      };
    }
    case START_SCHEDULE_DAY: {
      return {
        ...state,
        startScheduleDay: action.payload,
      };
    }
    case END_SCHEDULE_MONTH: {
      return {
        ...state,
        endScheduleMonth: action.payload,
      };
    }
    case END_SCHEDULE_DAY: {
      return {
        ...state,
        endScheduleDay: action.payload,
      };
    }
    case FIRST_SCHEDULE_MONTH: {
      return {
        ...state,
        firstScheduleMonth: action.payload,
      };
    }
    case FIRST_SCHEDULE_DAY: {
      return {
        ...state,
        firstScheduleDay: action.payload,
      };
    }
    case INTERVIEW_SCHEDULE_MONTH: {
      return {
        ...state,
        interviewScheduleMonth: action.payload,
      };
    }
    case INTERVIEW_SCHEDULE_DAY: {
      return {
        ...state,
        interviewScheduleDay: action.payload,
      };
    }
    case SECOND_SCHEDULE_MONTH: {
      return {
        ...state,
        secondScheduleMonth: action.payload,
      };
    }
    case SECOND_SCHEDULE_DAY: {
      return {
        ...state,
        secondScheduleDay: action.payload,
      };
    }
    case START_SCHEDULE_DATE: {
      return {
        ...state,
        startScheduleDate: action.payload,
      }
    }
    case END_SCHEDULE_DATE: {
      return {
        ...state,
        endScheduleDate: action.payload,
      }
    }
    case FIRST_SCHEDULE_DATE: {
      return {
        ...state,
        firstScheduleDate: action.payload,
      }
    }
    case INTERVIEW_SCHEDULE_DATE: {
      return {
        ...state,
        interviewScheduleDate: action.payload,
      }
    }
    case SECOND_SCHEDULE_DATE: {
      return {
        ...state,
        secondScheduleDate: action.payload,
      }
    }
    case SET_SCHEDULE: {
      return {
        ...state,
        scheduleDate: action.payload.schedules,
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
