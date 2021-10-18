import { IStatisticsState } from "./interface";
import { statisticsActionType } from '../../action/statistics';
import { GET_STATISTICS_SUCCESS, GET_STATISTICS_FAILURE } from "../../action/statistics/interface";

const initialState: IStatisticsState = {
  getStatisticsStatus: 0,
  statistics: {
    total_applicant_count: 0,
    total_competition_rate: 0,
    total_submitted_applicant_count: 0,
    common_score: {
      '158-170': 0,
      '145-157': 0,
      '132-144': 0,
      '119-131': 0,
      '106-118': 0,
      '93-105': 0,
      '80-92': 0,
      '-79': 0,
      common_count: 0,    
      common_competition_rate: 0,   
    },
    meister_score: {
      '98-110': 0,
      '85-97': 0,
			'72-84': 0,
			'59-71': 0,
			'46-58': 0,
			'33-45': 0,
			'20-32': 0,
			'-19': 0,
      special_count: 0,
      special_competition_rate: 0,
    },
    social_score: {
      '98-110': 0,
      '85-97': 0,
			'72-84': 0,
			'59-71': 0,
			'46-58': 0,
			'33-45': 0,
			'20-32': 0,
			'-19': 0,
      special_count: 0,
      special_competition_rate: 0,
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
          total_submitted_applicant_count: action.payload.total_submitted_applicant_count,
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
  