import IScheduleState from './interface';
import { STATUS, MONTH_DATE, DAY_DATE, scheduleActionType } from '../../action/schedule';

const InitState: IScheduleState = {
    status: 'START_DATE',
    monthDate: '1',
    dayDate: '1',
}

const scheduleReducer = (state: IScheduleState = InitState, action: scheduleActionType): IScheduleState => {
    switch (action.type) {
        case STATUS: {
            return {...state, status: action.payload};
        }
        case MONTH_DATE: {
            return {...state, monthDate: action.payload};
        }
        case DAY_DATE: {
            return {...state, dayDate: action.payload};
        }
        default: {
            return state;
        }
    }
};

export default scheduleReducer;