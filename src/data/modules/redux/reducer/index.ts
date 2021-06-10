import { combineReducers } from 'redux';

import applicant from './applicant';
import auth from './auth';
import main from './main';
import status from './status';

const rootReducer = combineReducers({
    applicant,
    auth,
    main,
    status
})

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
