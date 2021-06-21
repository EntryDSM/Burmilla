import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setFilterAction,
  setFilterPayload,
  getApplicantsListAction,
  getApplicantsListPayload,
  getApplicantInfoAction,
  getApplicantInfoPayload,
  updateApplicantStatusAction,
  updateApplicantStatusPayload,
  updateApplicantListAction,
  UpdateApplicantListPayload,
  resetUpdateStatusAction,
} from '../../data/modules/redux/action/applicant';
import { AppState } from '../../data/modules/store';
import { InitialState } from '../../data/modules/redux/reducer/applicant';

export const useApplicant = () => {
  const applicantStore = useSelector<AppState, InitialState>(state => ({
    filters: state.applicant.filters,
    getApplicantsListStatus: state.applicant.getApplicantsListStatus,
    getApplicantInfoStatus: state.applicant.getApplicantInfoStatus,
    updateApplicantStatusStatus: state.applicant.updateApplicantStatusStatus,
    applicantsList: state.applicant.applicantsList,
    currnetApplicantInfo: state.applicant.currnetApplicantInfo,
  }));

  const dispatch = useDispatch();

  const setFilter = useCallback(
    (payload: setFilterPayload) => dispatch(setFilterAction(payload)),
    [dispatch],
  );

  const getApplicantsList = useCallback(
    (payload: getApplicantsListPayload) =>
      dispatch(getApplicantsListAction(payload)),
    [dispatch],
  );

  const getApplicantInfo = useCallback(
    (payload: getApplicantInfoPayload) =>
      dispatch(getApplicantInfoAction(payload)),
    [dispatch],
  );

  const updateApplicantStatus = useCallback(
    (payload: updateApplicantStatusPayload) =>
      dispatch(updateApplicantStatusAction(payload)),
    [dispatch],
  );

  const updateApplicantList = useCallback(
    (payload: UpdateApplicantListPayload) =>
      dispatch(updateApplicantListAction(payload)),
    [dispatch],
  );

  const resetUpdateStatus = useCallback(
    () => dispatch(resetUpdateStatusAction()),
    [dispatch],
  );

  return {
    applicantStore,
    setFilter,
    getApplicantsList,
    getApplicantInfo,
    updateApplicantStatus,
    updateApplicantList,
    resetUpdateStatus,
  };
};

export default useApplicant;
