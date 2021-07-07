  import {
    statisticsActionType,
    // GET_STATISTICS_ASYNC,
  } from '../../action/statistics';
  import { GetEachStatisticsResponse } from '../../../../api/apiTypes';
  import { STATISTICS_SUCCESS, STATISTICS_FAILURE } from "../../action/statistics/interface";
  // import { returnApiResponseData } from '..';
  // import { API_STATUS } from '../../../../api/index';
  
  export interface IStatisticsState {
    getStatisticsStatus: 0 | 200 | 400 | 401;
    statistics: GetEachStatisticsResponse;
  }
  
  const initialState: IStatisticsState = {
    getStatisticsStatus: 0,
    statistics: {
      total_applicant_count: 0,
      total_competition_rate: 0,
      common_score: {
        '141-150': 0,
        '131-140': 0,
        '121-130': 0,
        '111-120': 0,
        '101-110': 0,
        '91-100': 0,
        '81-90': 0,
        '-80': 0,
        common_count: 0,    
        common_competition_rate: 0,   
      },
      meister_score: {
        '81-90': 0,
        '71-80': 0,
        '61-70': 0,
        '51-60': 0,
        '41-50': 0,
        '31-40': 0,
        '21-30': 0,
        '-20': 0,
        special_count: 0,
        special_competition_rate: 0,
      },
      social_score: {
        '81-90': 0,
        '71-80': 0,
        '61-70': 0,
        '51-60': 0,
        '41-50': 0,
        '31-40': 0,
        '21-30': 0,
        '-20': 0,
        special_count: 0,
        special_competition_rate: 0,
      },
    }
  };

  const statisticsReducer = (state: IStatisticsState = initialState, action: statisticsActionType) => {
    switch (action.type) {
      // case GET_STATISTICS_ASYNC:
      //   return returnApiResponseData<InitialState>({
      //     state,
      //     statusName: API_STATUS.getStatisticsStatus,
      //     dataKeyName: 'statistics',
      //   });
      case STATISTICS_SUCCESS: {
        return {
          ...state,
          statistics: action.payload
        };
      }
      case STATISTICS_FAILURE: {
        return {
          ...state,
        }
      }
      default: {
        return state;
      }
    }
  };
  
  export default statisticsReducer;
  