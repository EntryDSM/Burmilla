  // export const GET_STATISTICS = 'GET_STATISTICS';
  // export const GET_STATISTICS_ASYNC = 'GET_STATISTICS_ASYNC';
  
  // export type getStatisticsType =
  //   | typeof GET_STATISTICS
  //   | typeof GET_STATISTICS_ASYNC;
  // export interface GetStatistics {
  //   type: getStatisticsType;
  // }
  // export const getStatisticsAction = (
  // ): GetStatistics => ({
  //   type: GET_STATISTICS,
  // });
  
  // export type StatisticsActions = GetStatistics; 
import { 
  GET_STATISTICS, 
  STATISTICS_SUCCESS, 
  STATISTICS_FAILURE 
} from "./interface";
import { 
  CommonScoreDistribution, 
  SpecialScoreDistribution 
} from "../../../../api/apiTypes";

export const getStatisticsSuccess = (payload: {
  total_applicant_count: number;
  total_competition_rate: number;
  common_score: CommonScoreDistribution;
  meister_score: SpecialScoreDistribution;
  social_score: SpecialScoreDistribution;
}) => ({
  type: STATISTICS_SUCCESS,
  payload,
})

export const getStatisticsFailure = (payload: number) => ({
  type: STATISTICS_FAILURE,
  payload,
})

export const getStatistics = () => ({
  type: GET_STATISTICS,
})

export type statisticsActionType = 
  | ReturnType<typeof getStatisticsSuccess>
  | ReturnType<typeof getStatisticsFailure>
  | ReturnType<typeof getStatistics>;