import { error } from '../../../../../models/error';
import { 
  GET_STATISTICS, 
  GET_STATISTICS_SUCCESS, 
  GET_STATISTICS_FAILURE 
} from "./interface";
import { 
  CommonScoreDistribution, 
  SpecialScoreDistribution 
} from "../../../../api/apiTypes";

export const getStatisticsSuccess = (payload: {
  total_applicant_count: number;
  total_competition_rate: number;
  total_submitted_applicant_count: number;
  common_score: CommonScoreDistribution;
  meister_score: SpecialScoreDistribution;
  social_score: SpecialScoreDistribution;
}) => ({
  type: GET_STATISTICS_SUCCESS,
  payload,
})

export const getStatisticsFailure = (payload: error) => ({
  type: GET_STATISTICS_FAILURE,
  payload,
})

export const getStatistics = () => ({
  type: GET_STATISTICS,
})

export type statisticsActionType = 
  | ReturnType<typeof getStatisticsSuccess>
  | ReturnType<typeof getStatisticsFailure>
  | ReturnType<typeof getStatistics>;