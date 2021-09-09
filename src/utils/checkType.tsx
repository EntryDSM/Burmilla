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
  if (contact) {
    if (contact.substring(0, 2) === "02") {
      if (contact.length === 9)
        return contact.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
      if (contact.length === 12)
        return contact
          .replace(/-/g, "")
          .replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
    } else {
      if (contact.length === 10) {
        return contact.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      }
      if (contact.length === 11) {
        return contact.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      }
      if (contact.length === 13) {
        return contact
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      }
    }
  }
};
