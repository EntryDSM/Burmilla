import {
    StatisticsActions,
    GET_STATISTICS_ASYNC,
    SET_SELECTED_REGION,
  } from '../../action/statistics';
  import { GetEachStatisticsResponse } from '../../../../api/apiTypes';
  import { returnApiResponseData } from '..';
  import { API_STATUS } from '../../../../api/index';
  
  export interface InitialState {
    getStatisticsStatus: 0 | 200 | 401 | 403;
    statistics: GetEachStatisticsResponse;
    selectedRegion: string;
  }
  
  const initialState: InitialState = {
    getStatisticsStatus: 0,
    statistics: {
      meister_applicant: {
        '81-90': 0,
        '71-80': 0,
        '61-70': 0,
        '51-60': 0,
        '41-50': 0,
        '31-40': 0,
        '21-30': 0,
        '-20': 0,
        applicant_count: 0,
        competition_rate: 0,
      },
      social_applicant: {
        '81-90': 0,
        '71-80': 0,
        '61-70': 0,
        '51-60': 0,
        '41-50': 0,
        '31-40': 0,
        '21-30': 0,
        '-20': 0,
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
        '-80': 0,
        applicant_count: 0,
        competition_rate: 0,
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
  