import { scheduleType } from '../scheduleConstance';

interface IScheduleState {
    status: scheduleType;
    monthDate: string;
    dayDate: string;
}  

export default IScheduleState;