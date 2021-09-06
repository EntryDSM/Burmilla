import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
  setFilter,
  setApplicantInfoAppear,
  getApplicantsList,
  getApplicantInfo,
  updateApplicantStatus,
  updateApplicantList,
  resetUpdateStatus,
 } from '../../data/modules/redux/action/applicant';
import { 
  GetApplicantsListPayload, 
  UpdateApplicantStatusPayload,
  GetApplicantInfoPayload 
} from "../../data/api/apiTypes";

const useApplicant = () => {
  const dispatch = useDispatch();
  const state = useSelectState().applicant;
  const setState = {
    setFilter: (payload: GetApplicantsListPayload) => dispatch(setFilter(payload)),
    setApplicantInfoAppear: (payload: boolean) => dispatch(setApplicantInfoAppear(payload)),
    getApplicantsList: (payload: GetApplicantsListPayload) => dispatch(getApplicantsList(payload)),
    getApplicantInfo: (payload: GetApplicantInfoPayload) => dispatch(getApplicantInfo(payload)),
    updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => dispatch(updateApplicantStatus(payload)),
    updateApplicantList: (payload) => dispatch(updateApplicantList(payload)),
    resetUpdateStatus: () => dispatch(resetUpdateStatus()),
  };
  return {
    state,
    setState,
  };
};

export default useApplicant;
