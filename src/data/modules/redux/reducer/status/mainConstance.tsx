import React from "react";
import { processType } from "./interface";

export const START_DATE = "START_DATE" as const;
export const END_DATE = "END_DATE" as const;
export const FIRST_ANNOUNCEMENT = "FIRST_ANNOUNCEMENT" as const;
export const SECOND_ANNOUNCEMENT = "SECOND_ANNOUNCEMENT" as const;
export const INTERVIEW = "INTERVIEW" as const;
export const NOT_START = "NOT_START" as const;
export const MIDDLE = "MIDDLE" as const;

export type statusType =
  | typeof START_DATE
  | typeof END_DATE
  | typeof FIRST_ANNOUNCEMENT
  | typeof SECOND_ANNOUNCEMENT
  | typeof INTERVIEW
  | typeof NOT_START
  | typeof MIDDLE;

const mainConstance: Record<statusType, processType> = {
  [NOT_START]: {
    title: <p>지금은 원서접수기간이 아닙니다.</p>,
    getDescription: (date: string) => (
      <p>원서접수 기간은 {<span>{date}</span>}에 시작됩니다.</p>
    ),
    isHaveTerm: true,
    buttonText: "일정 수정",
    isButtonAble: false,
  },
  [START_DATE]: {
    title: <p>지금은 {<span>원서 작성</span>} 기간입니다.</p>,
    getDescription: (date: string) => (
      <p>원서 접수 기간은 {<span>{date}</span>}까지 입니다.</p>
    ),
    isHaveTerm: true,
    buttonText: "일정 수정",
    isButtonAble: true,
  },
  [MIDDLE]: {
    title: <p>원서 접수 가 끝났습니다.</p>,
    getDescription: (date: string) => (
      <p>1차 발표일은 {<span>{date}</span>}입니다.</p>
    ),
    isHaveTerm: true,
    buttonText: "일정 수정",
    isButtonAble: false,
  },
  [FIRST_ANNOUNCEMENT]: {
    title: <p>지금은 {<span>1차 발표</span>} 기간입니다.</p>,
    getDescription: () => "",
    isHaveTerm: true,
    buttonText: "일정 수정",
    isButtonAble: false,
  },
  [INTERVIEW]: {
    title: <p>지금은 {<span>면접</span>} 기간입니다.</p>,
    getDescription: (date: string) => (
      <p>면접 기간은 {<span>{date}</span>}입니다. </p>
    ),
    isHaveTerm: true,
    buttonText: "일정 수정",
    isButtonAble: false,
  },
  [SECOND_ANNOUNCEMENT]: {
    title: <p>지금은 {<span>발표 및 등록</span>} 기간입니다.</p>,
    getDescription: (date: string) => (
      <p>등록 기간은 {<span>{date}</span>}입니다.</p>
    ),
    isHaveTerm: true,
    buttonText: "일정 수정",
    isButtonAble: false,
  },
  [END_DATE]: {
    title: "원서 접수가 끝났습니다.",
    getDescription: () => <p>내년을 기약해 주세요.</p>,
    isHaveTerm: true,
    buttonText: "일정 수정",
    isButtonAble: false,
  },
};

export const mainProcessNumber = {
  [NOT_START]: 1,
  [START_DATE]: 2,
  [MIDDLE]: 3,
  [FIRST_ANNOUNCEMENT]: 4,
  [INTERVIEW]: 5,
  [SECOND_ANNOUNCEMENT]: 6,
  [END_DATE]: 7,
};

export default mainConstance;
