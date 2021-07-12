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
      return "마이스터전형";
    case "SOCIAL_ONE_PARENT":
    case "SOCIAL_FROM_NORTH":
    case "SOCIAL_MULTICULTURAL":
    case "SOCIAL_BASIC_LIVING":
    case "SOCIAL_LOWEST_INCOME":
    case "SOCIAL_TEEN_HOUSEHOLDER":
      return "사회통합전형";
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

export const returnContact = (contact: string) => {
  if (!contact) return "";
  return contact
    .replace(/[^0-9]/g, "")
    .replace(
      /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
      "$1 - $2 - $3"
    )
    .replace("--", "-");
};
