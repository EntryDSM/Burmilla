import { useDispatch } from 'react-redux';
import { useSelectState } from "../default";
import {
  getStatistics,
  getStatisticsSuccess,
} from '../../data/modules/redux/action/statistics';
import { 
  CommonScoreDistribution, 
  SpecialScoreDistribution 
} from "../../data/api/apiTypes";

export const useStatistics = () => {
  const dispatch = useDispatch();
  const state = useSelectState().statistics;
  const setState = {
    getStatistics: () => dispatch(getStatistics()),
    setStatisticsSuccess: (payload: { 
      total_applicant_count: number;
      total_competition_rate: number;
      total_submitted_applicant_count: number;
      common_score: CommonScoreDistribution;
      meister_score: SpecialScoreDistribution;
      social_score: SpecialScoreDistribution 
    }) => dispatch(getStatisticsSuccess(payload)),
  };
  return {
    state,
    setState,
  };
};

export default useStatistics;
