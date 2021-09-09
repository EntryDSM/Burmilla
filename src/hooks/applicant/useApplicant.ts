import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
  setFilter,
  getApplicantsList,
  getApplicantInfo,
  updateApplicantStatus,
  updateApplicantSubmitStatus,
 } from '../../data/modules/redux/action/applicant';
import { 
  GetApplicantsListPayload, 
  GetApplicantInfoPayload,
  UpdateApplicantStatusPayload,
  UpdateApplicantSubmitStatusPayload,
} from "../../data/api/apiTypes";

const useApplicant = () => {
  const dispatch = useDispatch();
  const state = useSelectState().applicant;
  const setState = {
    setFilter: (payload: GetApplicantsListPayload) => dispatch(setFilter(payload)),
    getApplicantsList: (payload: GetApplicantsListPayload) => dispatch(getApplicantsList(payload)),
    getApplicantInfo: (payload: GetApplicantInfoPayload) => dispatch(getApplicantInfo(payload)),
    updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => dispatch(updateApplicantStatus(payload)),
    updateApplicantSubmitStatus: (payload: UpdateApplicantSubmitStatusPayload) => dispatch(updateApplicantSubmitStatus(payload)),
    
  };
  return {
    state,
    setState,
  };
};

export default useApplicant;
