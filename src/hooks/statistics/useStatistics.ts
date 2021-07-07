import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSelectState } from "../default";
import {
  getStatistics,
  getStatisticsSuccess,
} from '../../data/modules/redux/action/statistics';
import { 
  CommonScoreDistribution, 
  SpecialScoreDistribution 
} from "../../data/api/apiTypes";
import { AppState } from '../../data/modules/store';
import { IStatisticsState } from '../../data/modules/redux/reducer/statistics';

export const useStatistics = () => {
  // const statisticsStore = useSelector<AppState, InitialState>(state => ({
    //   statistics: state.statistics.statistics,
    //   getStatisticsStatus: state.statistics.getStatisticsStatus,
    // }));
    
    // const getStatistics = useCallback(
      //   () => dispatch(getStatisticsAction()),
      //   [dispatch],
      // );
      
    // return { statisticsStore, getStatistics };
  const dispatch = useDispatch();
  const state = useSelectState().statistics;
  const setState = {
    getStatistics: () => dispatch(getStatistics()),
    setStatisticsSuccess: (payload: { 
      total_applicant_count: number;
      total_competition_rate: number;
      common_score: CommonScoreDistribution;
      meister_score: SpecialScoreDistribution;
      social_score: SpecialScoreDistribution }) => 
      dispatch(getStatisticsSuccess(payload)),
  };
  return {
    state,
    setState,
  };
};

export default useStatistics;
