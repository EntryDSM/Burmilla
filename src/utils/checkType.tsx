export const returnRegion = (isDaejeon: boolean) => {
  if (isDaejeon) return "대전";
  else if (isDaejeon === false) return "전국";
  else return "";
};

export const returnApplicationType = (applicationType: string) => {
  switch (applicationType) {
    case "COMMON":
      return "일반전형";
    case "MEISTER":
      return "마이스터 전형";
    case "SOCIAL":
      return "사회통합 전형";
    default:
      return "";
  }
};

export const returnApplicationRemark = (applicationRemark: string) => {
  switch (applicationRemark) {
    case "ONE_PARENT":
      return "한부모가족";
    case "FROM_NORTH":
      return "북한이탈주민";
    case "MULTICULTURAL":
      return "다문화가정";
    case "BASIC_LIVING":
      return "기초생활수급자";
    case "LOWEST_INCOME":
      return "차상위계층";
    case "TEEN_HOUSEHOLDER":
      return "소년소녀가장";
    case "PRIVILEGED_ADMISSION ":
      return "특례 입학 대상자";
    case "NATIONAL_MERIT ":
      return "국가 유공자";
    default:
      return "";
  }
};

export const returnAdditionalType = (additionalType: string) => {
  switch (additionalType) {
    case "NATIONAL_MERIT":
      return "국가유공자";
    case "PRIVILEGED_ADMISSION":
      return "특례입학대상자";
    default:
      return "";
  }
};

export const returnEducationalType = (educationalType: string) => {
  switch (educationalType) {
    case "QUALIFICATION_EXAM":
      return "검정고시";
    case "PROSPECTIVE_GRADUATE":
      return "3학년 졸업예정자";
    case "GRADUATE":
      return "졸업";
    default:
      return "";
  }
};

export const phoneWithHyphen = (number: string) => {
  return number
    ? number
        .replace(/[^0-9]/g, "")
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          "$1-$2-$3"
        )
        .replace("--", "-")
    : "";
};
