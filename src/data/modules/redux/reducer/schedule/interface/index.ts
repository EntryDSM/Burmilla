import { scheduleType } from '../scheduleConstance';

interface IScheduleState {
  status: scheduleType;
  isEnd: boolean;
  isStart: boolean;
  processes: Object;
  date: Array<processTimeType>;
  error: number;
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
