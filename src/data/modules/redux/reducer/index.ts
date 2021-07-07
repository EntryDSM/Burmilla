import { combineReducers } from 'redux';

import applicantReducer from './applicant';
import authReducer from './auth';
import statisticsReducer from './statistics';
import scheduleReducer from './schedule';

const rootReducer = combineReducers({
    applicant: applicantReducer,
    auth: authReducer,
    statistics: statisticsReducer,
    schedule: scheduleReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;

export const returnApiResponseData = <I>(props: {
  state: I;
  statusName: string;
  payload?: {
    data?: null | any;
    status?: number;
  };
  dataKeyName?: string;
}): I => {
  if (!props.payload.data || props.payload.data === ' ') {
    return {
      ...props.state,
      [props.statusName]: props.payload.status,
    };
  }

  if (props.dataKeyName) {
    return {
      ...props.state,
      [props.dataKeyName]: props.payload.data,
      [props.statusName]: props.payload.status,
    };
  }
};
