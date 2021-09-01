import { error } from '../../../../../../models/error';
import {
    CommonScoreDistribution, 
    SpecialScoreDistribution 
} from '../../../../../api/apiTypes';

export interface IStatisticsState {
  getStatisticsStatus: 0 | 200 | 400 | 401;
  statistics: statisticsType;
  error: error;
}

export interface statisticsType {
  total_applicant_count: number;
  total_competition_rate: number;
  common_score: CommonScoreDistribution;
  meister_score: SpecialScoreDistribution;
  social_score: SpecialScoreDistribution;
}