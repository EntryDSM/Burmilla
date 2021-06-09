import {
    StatisticsActions,
    GET_STATISTICS_ASYNC,
    SET_SELECTED_REGION,
  } from '../../action/main';
  import { GetStatisticsResponse } from '../../../../api/apiTypes';
  import { returnApiResponseData } from '..';
  import { API_STATUS } from '../../../../api/index';
  
  export interface InitialState {
    getStatisticsStatus: 0 | 200 | 401 | 403;
    statistics: GetStatisticsResponse;
    selectedRegion: string;
  }
  
  const initialState: InitialState = {
    getStatisticsStatus: 0,
    statistics: {
      daejeon: {
        meister_applicant: {
          '141-150': 0,
          '131-140': 0,
          '121-130': 0,
          '111-120': 0,
          '101-110': 0,
          '91-100': 0,
          '81-90': 0,
          '71-80': 0,
          '-70': 0,
          applicant_count: 0,
          competition_rate: 0,
        },
        social_applicant: {
          '141-150': 0,
          '131-140': 0,
          '121-130': 0,
          '111-120': 0,
          '101-110': 0,
          '91-100': 0,
          '81-90': 0,
          '71-80': 0,
          '-70': 0,
          applicant_count: 0,
          competition_rate: 0,
        },
        common_applicant: {
          '141-150': 0,
          '131-140': 0,
          '121-130': 0,
          '111-120': 0,
          '101-110': 0,
          '91-100': 0,
          '81-90': 0,
          '71-80': 0,
          '-70': 0,
          applicant_count: 0,
          competition_rate: 0,
        },
        total_applicant_count: 0,
        total_competition_rate: 0,
      },
      nationwide: {
        meister_applicant: {
          '141-150': 0,
          '131-140': 0,
          '121-130': 0,
          '111-120': 0,
          '101-110': 0,
          '91-100': 0,
          '81-90': 0,
          '71-80': 0,
          '-70': 0,
          applicant_count: 0,
          competition_rate: 0,
        },
        social_applicant: {
          '141-150': 0,
          '131-140': 0,
          '121-130': 0,
          '111-120': 0,
          '101-110': 0,
          '91-100': 0,
          '81-90': 0,
          '71-80': 0,
          '-70': 0,
          applicant_count: 0,
          competition_rate: 0,
        },
        common_applicant: {
          '141-150': 0,
          '131-140': 0,
          '121-130': 0,
          '111-120': 0,
          '101-110': 0,
          '91-100': 0,
          '81-90': 0,
          '71-80': 0,
          '-70': 0,
          applicant_count: 0,
          competition_rate: 0,
        },
        total_applicant_count: 0,
        total_competition_rate: 0,
      },
      total_applicant_count: 0,
      total_competition_rate: 0,
    },
    selectedRegion: 'all',
  };
  
  const applicantReducer = (state = initialState, action: StatisticsActions) => {
    switch (action.type) {
      case GET_STATISTICS_ASYNC:
        return returnApiResponseData<InitialState>({
          state,
          statusName: API_STATUS.getStatisticsStatus,
          payload: action.payload,
          dataKeyName: 'statistics',
        });
      case SET_SELECTED_REGION: {
        return {
          ...state,
          selectedRegion: action.payload.selectedRegion,
        };
      }
      default:
        return state;
    }
  };
  
  export default applicantReducer;
  