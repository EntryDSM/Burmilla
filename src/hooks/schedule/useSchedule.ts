// import { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelectState } from '../default';
// import {
//     setStatus,
//     setIsStart,
//     setIsEnd,
//     setProcess,
//     getStatus,
//     getStatusSuccess,
//     updateScheduleStatusPayload,
//     updateScheduleStatusAction
//   } from '../../data/modules/redux/action/schedule';
// import { UpdateScheduleProcessTimeType, scheduleProcessType } from "../../data/modules/redux/reducer/schedule/interface";
// import { scheduleType } from '../../data/modules/redux/reducer/schedule/scheduleConstance'

// const useSchedule = () => {
// const dispatch = useDispatch();
//   const state = useSelectState().schedule;
//   const setState = {
//     setStatus: (payload: scheduleType) => dispatch(setStatus(payload)),
//     setIsStart: (payload: boolean) => dispatch(setIsStart(payload)),
//     setIsEnd: (payload: boolean) => dispatch(setIsEnd(payload)),
//     setProcess: (payload: scheduleProcessType[]) => dispatch(setProcess(payload)),
//     getStatus: () => dispatch(getStatus()),
//     setStatusSuccess: (payload: { schedules: Array<UpdateScheduleProcessTimeType>; current_status: string }) =>
//       dispatch(getStatusSuccess(payload)),
//   };
//   const updateScheduleStatus = useCallback(
//     (payload: updateScheduleStatusPayload) =>
//       dispatch(updateScheduleStatusAction(payload)),
//     [dispatch],
//   );
//   return {
//       state,
//       setState,
//       updateScheduleStatus,
//   };
// };

// export default useSchedule;