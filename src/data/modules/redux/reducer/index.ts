import { combineReducers } from 'redux';

import applicant from './applicant';
import auth from './auth';
import statistics from './statistics';
import schedule from './schedule';
import status from './status';

const rootReducer = combineReducers({
    applicant,
    auth,
    statistics,
    schedule,
    status
})

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;

export const returnApiResponseData = <I>(props: {
  state: I;
  statusName: string;
  payload: {
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
