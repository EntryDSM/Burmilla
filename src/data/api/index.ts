import axios from 'axios';
import uri from './uri';
import { BaseURL } from './baseURL';
import * as T from './apiTypes';
import { getAccessToken } from '../../utils/token';

export enum API_STATUS {
  loginStatus = 'loginStatus',
  refreshTokenStatus = 'refreshTokenStatus',
  getStatisticsStatus = 'getStatisticsStatus',
  getApplicantsListStatus = 'getApplicantsListStatus',
  getApplicantInfoStatus = 'getApplicantInfoStatus',
  updateApplicantStatusStatus = 'updateApplicantStatusStatus',
  getSchedulesStatus = 'getSchedulesStatus',
  updateScheduleStatusStatus = 'updateScheduleStatusStatus',
}

const instance = (api: 'main' | 'excel') =>
  axios.create({
    timeout: 10000,
    baseURL: `${BaseURL[api]}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

const authorization = (token: string) => ({
  Authorization: `Bearer ${token}`,
  'Cache-Control': 'no-cache',
});

// export const loginApi = async (payload: T.LoginPayload) => {
//   try {
//     const response = await instance('main').post<T.Tokens>(uri.signin, payload);
//     localStorage.setItem('access_token', response.data.access_token);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const refreshTokenApi = async (payload: T.RefreshToken) => {
//   try {
//     const response = await instance('main').put<T.RefreshResponse>(uri.signin, null, {
//       headers: authorization(payload.refresh_token),
//     });
//     localStorage.setItem('access_token', response.data.access_token);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };
export const loginApi = async (payload: T.LoginPayload) => {
  const response = await instance('main').post<T.Tokens>(uri.signin, payload);

  return [response.data, response.status];
};

export const refreshTokenApi = async (payload: T.Tokens) => {
  const response = await instance('main').put<T.Tokens>(uri.signin, null, {
    headers: authorization(payload.refresh_token),
  });

  return [response.data, response.status];
};

export const getScheduleApi = async () => {
  const response = await instance('main').get<T.GetSchedulesResponse>(uri.schedules);

  return response;
}

export const updateScheduleApi = async (access_token: string, payload: T.UpdateScheduleStatusPayload) => {
  try {
    const request = instance('main');

    await request.patch(uri.schedules , payload, {
    headers: authorization(getAccessToken()),
  });
  } catch (error) {
    throw error;
  }
}

export const getStatisticsApi = async (access_token: string) => {
  const response = await instance('main').get<T.GetEachStatisticsResponse>(
   uri.total ,
    {
      headers: authorization(getAccessToken()),
    },
  );

  return response;
};

export const getApplicantsListApi = async (access_token: string, payload: T.GetApplicantsListPayload) => {
  const response = await instance('main').get<T.GetApplicantsListResponse>(
   uri.applicants,
    {
      headers: authorization(getAccessToken()),
      params: payload,
    },
  );

  return response;
};

export const getApplicantInfoApi = async (access_token: string, payload: T.GetApplicantInfoPayload) => {
  try {
    const request = instance('main');
    return await request.get(uri.applicant+`/${payload.receipt_code}`, {
      headers: authorization(getAccessToken()),
    })
  } catch (error) {
    throw error;
  }
};

export const updateApplicantStatusApi = async (access_token: string, payload: T.UpdateApplicantStatusPayload) => {
  try {
    const request = instance('main');

    await request.patch(uri.applicant+`/${payload.receipt_code}`, null, {
    headers: authorization(getAccessToken()),
    params: payload,
  });
  } catch (error) {
    throw error;
  }
}

export const updateApplicantSubmitStatusApi = async (access_token: string, payload: T.UpdateApplicantSubmitStatusPayload) => {
  try {
    const request = instance('main');

    await request.patch(uri.applicant_status+`/${payload.receipt_code}`, null, {
    headers: authorization(getAccessToken()),
  });
  } catch (error) {
    throw error;
  }
}

export const checkPasswordApi = async (access_token: string, payload: T.CheckPasswordRequest) => {
  try {
    const request = instance('main');
    await request.get(uri.signin, {
      headers: authorization(getAccessToken()),
      params: payload,
    });
  } catch (error) {
    throw error;
  }
}

export const deleteApplicantTableApi = async (access_token: string) => {
  try {
    const request = instance('main');
    await request.delete(uri.delete_table, {
      headers: authorization(getAccessToken()),
    });
  } catch (error) {
    throw error;
  }
}

export const downloadApplicantsListExcel = async () => {
  const response = await instance('excel').get(uri.applicants_print , {
    headers: authorization(getAccessToken()),
    responseType: 'blob',
  });

  return response;
};

export const downloadAdmissionExcel = async () => {
  const response = await instance('excel').get(uri.ticket_print, {
    headers: authorization(getAccessToken()),
    responseType: 'blob',
  });

  return response.data;
};
