import axios from 'axios';

import uri from './uri';
import { BaseURL } from './baseURL';
import * as T from './apiTypes';
import { getAccessToken } from '../../utils/token';
import { statusRequest } from 'src/models/dto/request/statusRequest';

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

export const getApplicantsListApi = async (
  payload: T.GetApplicantsListPayload,
) => {
  const response = await instance('main').get<T.GetApplicantsListResponse>(
  //  `${uri.applicants}?size=${payload.size}&page=${payload.page}
  //  &is-daejeon=${payload.is_daejeon}&is-nationwide=${payload.is_nationwide}
  //  &is-printed-arrived=${payload.is_printed_arrived}
  //  &is-common=${payload.is_common}&is-meister=${payload.is_meister}
  //  &is-social=${payload.is_social}&receipt-code=${payload.receipt_code}
  //  &telephone-number=${payload.telephone_number}&name=${payload.telephone_number}`,
   uri.applicants,
    {
      headers: authorization(getAccessToken()),
      params: payload,
    },
  );

  return [response.data, response.status];
};

export const getApplicantInfoApi = async (
  payload: T.GetApplicantInfoPayload,
) => {
  const response = await instance('main').get<T.GetApplicantInfoResponse>(
   uri.applicant ,
    {
      headers: authorization(getAccessToken()),
      params: payload,
    },
  );
  

  return [response.data, response.status];
};

export const updateApplicantStatusApi = async (
  payload: T.UpdateApplicantStatusPayload,
) => {
  const response = await instance('main').patch(`/admin/applicant`, {
    headers: authorization(getAccessToken()),
    params: {
      payload,
    },
  });

  return [response.data, response.status];
};

export const downloadApplicantsListExcel = async () => {
  const response = await instance('excel').get(uri.applicants_print , {
    headers: authorization(getAccessToken()),
    responseType: 'blob',
  });

  return response.data;
};

export const downloadAdmissionExcel = async () => {
  const response = await instance('excel').get(uri.ticket_print, {
    headers: {
      Authorization: getAccessToken(),
    },
    responseType: 'blob',
  });

  return response.data;
};

// export const downloadStatisticsExcel = async () => {
//   const response = await instance().get(uri., {
//     headers: authorization(getAccessToken()),
//     responseType: 'blob',
//   });

//   return response.data;
// };
