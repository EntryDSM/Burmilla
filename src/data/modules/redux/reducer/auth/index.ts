// import IAuthState from './interface';
// import { 
//   IS_LOGIN, 
//   authActionType,
//   ERROR,
//   SIGNIN_FAILURE,
//   SIGNIN_SUCCESS, } from '../../action/auth';

// const initState: IAuthState = {
//   isLogin: localStorage.getItem('access_token') ? true : false,
//   id: '',
//   password: '',
//   error: null
// };

// const authReducer = (state: IAuthState = initState, action: authActionType) => {
//   switch (action.type) {
//     case ERROR: {
//       return {
//         ...state,
//         error: action.payload,
//       };
//     }
//     case IS_LOGIN: {
//       return {
//         ...state,
//         isLogin: action.payload,
//       };
//     }
//     case SIGNIN_FAILURE: {
//       return {
//         ...state,
//         error: action.payload,
//       };
//     }
//     case SIGNIN_SUCCESS: {
//       return {
//         ...state,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export default authReducer;

import { LOGIN_ASYNC, REFRESH_TOKEN_ASYNC, AuthActions } from '../../action/auth';
import { returnApiResponseData } from '../';
import { API_STATUS } from '../../../../api/index';

export interface InitialState {
  loginStatus: 0 | 200 | 201 | 400 | 401;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}

const initialState: InitialState = {
  loginStatus: 0,
  tokens: {
    access_token: null,
    refresh_token: null,
  },
};

const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case LOGIN_ASYNC: {
      return returnApiResponseData<InitialState>({
        state,
        statusName: API_STATUS.loginStatus,
        payload: action.payload,
        dataKeyName: 'tokens',
      });
    }
    case REFRESH_TOKEN_ASYNC: {
      return returnApiResponseData<InitialState>({
        state,
        statusName: API_STATUS.refreshTokenStatus,
        payload: action.payload,
        dataKeyName: 'tokens',
      });
    }
    default:
      return state;
  }
};

export default authReducer;
