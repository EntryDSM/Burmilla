import { scheduleType } from '../scheduleConstance';
import { error } from "../../../../../../models/error";

export interface IScheduleState {
  status: scheduleType;
  isEnd: boolean;
  isStart: boolean;
  processes: Object;
  startScheduleMonth: number;
  startScheduleDay: number;
  endScheduleMonth: number;
  endScheduleDay: number;
  firstScheduleMonth: number;
  firstScheduleDay: number;
  interviewScheduleMonth: number;
  interviewScheduleDay: number;
  secondScheduleMonth: number;
  secondScheduleDay: number;
  startScheduleDate: string;
  endScheduleDate: string;
  firstScheduleDate: string;
  interviewScheduleDate: string;
  secondScheduleDate: string;
  scheduleDate: Array<scheduleUpdateTypes>;
  date: processTimeType[];
  error: error;
}

export interface processTimeType {
  type: string;
  date: string;
}

export interface scheduleUpdateTypes {
  type: string;
  date: string;
}

export interface processType {
  title: React.ReactNode;
  getDescription: (value?: string) => React.ReactNode;
  buttonText: string;
}


export default IScheduleState;
