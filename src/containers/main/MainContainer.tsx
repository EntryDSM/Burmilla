import React, { FC, Suspense, useEffect } from "react";
import MainDummyData from "../../utils/util/loadingDummyData/MainDummyData";
import { useProcess } from "../../hooks/main";

const Main = React.lazy(() => import("../../components/Main"));

const MainContainer: FC = () => {
  const processState = useProcess();
  const getNowProcess = (status: string) => {
    if (!processState.state.processes[status]) return MainDummyData;
    return processState.state.processes[status];
  };
  useEffect(() => {
    // data 받아와야 함
    processState.setState.setStatusSuccess([
      {
        year: "2022",
        type: "START_DATE",
        date: "2022-10-31",
      },
      {
        year: "2022",
        type: "END_DATE",
        date: "2022-10-31",
      },
      {
        year: "2022",
        type: "FIRST_ANNOUNCEMENT",
        date: "2022-10-31",
      },
      {
        year: "2022",
        type: "SECOND_ANNOUNCEMENT",
        date: "2022-10-31",
      },
      {
        year: "2022",
        type: "INTERVIEW",
        date: "2022-10-31",
      },
    ]);
  }, []);
  const status = processState.state.status;
  const date = processState.state.date;
  const getNowProcessDate = (status): string => {
    const result = date.filter((date) => status === date.type)[0];
    return result ? result.date : "";
  };
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Main
        status={status}
        date={getNowProcessDate(status)}
        process={getNowProcess(processState.state.status)}
      />
    </Suspense>
  );
};

export default MainContainer;
