import React from "react";

export const START_DATE = "START_DATE" as const;
export const FIRST_ANNOUNCEMENT = "FIRST_ANNOUNCEMENT" as const;
export const INTERVIEW = "INTERVIEW" as const;
export const SECOND_ANNOUNCEMENT = "SECOND_ANNOUNCEMENT" as const;

export type scheduleType =
  | typeof START_DATE
  | typeof FIRST_ANNOUNCEMENT
  | typeof INTERVIEW
  | typeof SECOND_ANNOUNCEMENT;

const scheduleConstance = {};

export default scheduleConstance;
