import { combineReducers } from 'redux';

import applicantReducer from './applicant';
import authReducer from './auth';
import signinReducer from './signin';
import statisticsReducer from './statistics';
import scheduleReducer from './schedule';

const rootReducer = combineReducers({
    applicant: applicantReducer,
    auth: authReducer,
    signin: signinReducer,
    statistics: statisticsReducer,
    schedule: scheduleReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;

