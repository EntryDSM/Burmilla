import { scheduleType } from '../scheduleConstance';
import { error } from "../../../../../../models/error";

interface IScheduleState {
  status: scheduleType;
  isEnd: boolean;
  isStart: boolean;
  processes: Object;
  date: Array<processTimeType>;
  error: error;
}

export interface processTimeType {
  type: string;
  year: string;
  date: string;
}

export interface processType {
  title: React.ReactNode;
  getDescription: (value?: string) => React.ReactNode;
  buttonText: string;
}

export default IScheduleState;
