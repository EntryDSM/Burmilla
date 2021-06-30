import IScheduleState from './interface';
import { IS_START, IS_END, STATUS, PROCESS, scheduleActionType } from '../../action/schedule';
import scheduleConstance, { START_DATE, scheduleType } from "./scheduleConstance";
import { STATUS_SUCCESS, STATUS_FAILURE, UPDATE_SCHEDULE_STATUS_ASYNC } from "../../action/schedule/interface";
import { returnApiResponseData } from '../';
import { API_STATUS } from '../../../../api/index';

const InitState: IScheduleState = {
    updateScheduleStatusStatus: 0,
    status: START_DATE,
    isStart: true,
    isEnd: true,
    processes: scheduleConstance,
    date: [
      {
        type: 'START_DATE',
        startDate: [
          {
            month: '10',
            day: '20',
          }
        ],
        endDate: [
          {
            month: '10',
            day: '20',
          }
        ],
      },
      {
        type: 'FIRST_ANNOUNCEMENT',
        startDate: [
          {
            month: '10',
            day: '20',
          }
        ],
      },
      {
        type: 'INTERVIEW',
        startDate: [
          {
            month: '10',
            day: '20',
          }
        ],
      },
      {
        type: 'SECOND_ANNOUNCEMENT',
        startDate: [
          {
            month: '10',
            day: '20',
          }
        ],
      },
    ],
}

const scheduleReducer = (state: IScheduleState = InitState, action: scheduleActionType): IScheduleState => {
    switch (action.type) {
        case STATUS: {
            return {...state, status: action.payload};
        }
        case IS_START: {
            return { ...state, isStart: action.payload };
        }
        case IS_END: {
            return { ...state, isEnd: action.payload };
        }
        case PROCESS: {
            return {...state, processes: action.payload};
        }
        case STATUS_SUCCESS: {
            return {
                ...state, 
                date: action.payload.schedules, 
                status: action.payload.current_status as scheduleType
            };
        }
        case STATUS_FAILURE: {
            return {
                ...state,
            }
        }
        case UPDATE_SCHEDULE_STATUS_ASYNC: {
          return returnApiResponseData<IScheduleState>({
            state,
            statusName: API_STATUS.updateApplicantStatusStatus,
            payload: action.payload,
          });
        }
        default: {
            return state;
        }
    }
};

export default scheduleReducer;