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
}

const instance = (api: 'main' | 'excel') =>
  axios.create({
    baseURL: `${BaseURL[api]}/admin`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: `${BaseURL}`,
  });
  return request;
};

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

export const getStatisticsApi = async (payload: T.GetStatisticsPayload) => {
  const response = await instance('main').get<T.GetStatisticsResponse>(
   uri.total ,
    {
      headers: authorization(getAccessToken()),
      params: payload,
    },
  );

  return [response.data, response.status];
};

export const getApplicantsListApi = async (
  payload: T.GetApplicantsListPayload,
) => {
  const response = await instance('main').get<T.GetApplicantsListResponse>(
   uri.applicants ,
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

export const updateApplicantStatusApi = async ({
  email,
  ...payload
}: T.UpdateApplicantStatusPayload) => {
  const response = await instance('main').patch(uri.applicant , payload, {
    headers: authorization(getAccessToken()),
    params: {
      email,
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
