import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getStatisticsPayload,
  getStatisticsAction,
  setSelectedRegionPayload,
  setSelectedRegionAction,
} from '../../data/modules/redux/action/statistics';
import { AppState } from '../../data/modules/store';
import { InitialState } from '../../data/modules/redux/reducer/statistics';

export const useStatistics = () => {
  const statisticsStore = useSelector<AppState, InitialState>(state => ({
    statistics: state.statistics.statistics,
    getStatisticsStatus: state.statistics.getStatisticsStatus,
    selectedRegion: state.statistics.selectedRegion,
  }));

  const dispatch = useDispatch();

  const getStatistics = useCallback(
    (payload: getStatisticsPayload) => dispatch(getStatisticsAction(payload)),
    [dispatch],
  );
  const setSelectedRegion = useCallback(
    (payload: setSelectedRegionPayload) =>
      dispatch(setSelectedRegionAction(payload)),
    [],
  );

  return { statisticsStore, getStatistics, setSelectedRegion };
};

export default useStatistics;
