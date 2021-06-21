import {
    ApiPayload,
    GetStatisticsPayload,
    GetStatisticsResponse,
  } from '../../../../api/apiTypes';
  
  export const SET_SELECTED_REGION = 'SET_SELECTED_REGION';
  export const GET_STATISTICS = 'GET_STATISTICS';
  export const GET_STATISTICS_ASYNC = 'GET_STATISTICS_ASYNC';
  
  export type getStatisticsType =
    | typeof GET_STATISTICS
    | typeof GET_STATISTICS_ASYNC;
  export type getStatisticsPayload = ApiPayload<GetStatisticsResponse> &
    GetStatisticsPayload;
  export interface GetStatistics {
    type: getStatisticsType;
    payload: getStatisticsPayload;
  }
  export const getStatisticsAction = (
    payload: getStatisticsPayload,
  ): GetStatistics => ({
    type: GET_STATISTICS,
    payload,
  });
  
  export type setSelectedRegionType = typeof SET_SELECTED_REGION;
  export interface setSelectedRegionPayload {
    selectedRegion: string;
  }
  export interface SetSelectedRegion {
    type: setSelectedRegionType;
    payload: setSelectedRegionPayload;
  }
  export const setSelectedRegionAction = (payload: setSelectedRegionPayload) => ({
    type: SET_SELECTED_REGION,
    payload,
  });
  
  export type StatisticsActions = GetStatistics | SetSelectedRegion;
  