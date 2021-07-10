import { IStatisticsState } from "./interface";
import { statisticsActionType } from '../../action/statistics';
import { GET_STATISTICS_SUCCESS, GET_STATISTICS_FAILURE, GET_STATISTICS } from "../../action/statistics/interface";

const initialState: IStatisticsState = {
  getStatisticsStatus: 0,
  statistics: {
    total_applicant_count: 0,
    total_competition_rate: 0,
    common_score: {
      common_count: 0,    
      common_competition_rate: 0,   
      '141-150': 0,
      '131-140': 0,
      '121-130': 0,
      '111-120': 0,
      '101-110': 0,
      '91-100': 0,
      '81-90': 0,
      '-80': 0,
    },
    meister_score: {
      special_count: 0,
      special_competition_rate: 0,
      '81-90': 0,
      '71-80': 0,
      '61-70': 0,
      '51-60': 0,
      '41-50': 0,
      '31-40': 0,
      '21-30': 0,
      '-20': 0,
    },
    social_score: {
      special_count: 0,
      special_competition_rate: 0,
      '81-90': 0,
      '71-80': 0,
      '61-70': 0,
      '51-60': 0,
      '41-50': 0,
      '31-40': 0,
      '21-30': 0,
      '-20': 0,
    },
  },
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const statisticsReducer = (state: IStatisticsState = initialState, action: statisticsActionType) => {
  switch (action.type) {  
    case GET_STATISTICS_SUCCESS: {
      return {
        ...state,
        statistics: {
          total_applicant_count: action.payload.total_applicant_count,
          total_competition_rate: action.payload.total_competition_rate,
          common_score: action.payload.common_score,
          meister_score: action.payload.meister_score,
          social_score: action.payload.social_score,
        }
      };
    }
    case GET_STATISTICS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    default: {
      return state;
    }
  }
};
  
export default statisticsReducer;
  