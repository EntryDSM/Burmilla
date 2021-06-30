import React from "react";
import { scheduleProcessType } from "./interface";

export const START_DATE = "START_DATE" as const;
export const FIRST_ANNOUNCEMENT = "FIRST_ANNOUNCEMENT" as const;
export const INTERVIEW = "INTERVIEW" as const;
export const SECOND_ANNOUNCEMENT = "SECOND_ANNOUNCEMENT" as const;

export type scheduleType =
  | typeof START_DATE
  | typeof FIRST_ANNOUNCEMENT
  | typeof INTERVIEW
  | typeof SECOND_ANNOUNCEMENT;

const scheduleConstance: Record<scheduleType, scheduleProcessType> = {
  [START_DATE]: {
    title: <p>원서 작성</p>,
  },
  [FIRST_ANNOUNCEMENT]: {
    title: <p>1차 발표</p>,
  },
  [INTERVIEW]: {
    title: <p>면접</p>,
  },
  [SECOND_ANNOUNCEMENT]: {
    title: <p>발표 및 등록</p>,
  },
};

export default scheduleConstance;
