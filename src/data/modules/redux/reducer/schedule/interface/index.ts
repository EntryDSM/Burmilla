import { scheduleType } from '../scheduleConstance';

interface IScheduleState {
    updateScheduleStatusStatus: 0 | 204 | 400 | 401 | 403 | 404;
    status: scheduleType;
    isStart: boolean;
    isEnd: boolean;
    processes: Object;
    date: Array<UpdateScheduleProcessTimeType>;
}  

export interface UpdateScheduleProcessTimeType {
    type: string;
    startDate: Array<startDateType>;
    endDate?: Array<endDateType>;
}

export interface startDateType {
    month: string;
    day: string;
}

export interface endDateType {
    month: string;
    day: string;
}

export interface scheduleProcessType {
    title: React.ReactNode;
}

export default IScheduleState;