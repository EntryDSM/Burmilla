import * as React from "react";

import * as S from "./style";
import { ApplicantPrivacy } from "../../../../../data/api/apiTypes";
import {
  returnApplyType,
  returnGradeType,
} from "../../../../../utils/checkType";

interface Props {
  applicantPrivacy: ApplicantPrivacy;
}

function BasicInfo({
  applicantPrivacy: {
    user_photo,
    name,
    grade_type,
    birth_date,
    school_name,
    address,
    detail_address,
    apply_type,
  },
}: Props) {
  const checkApplyType = React.useCallback(() => {
    return returnApplyType(apply_type);
  }, [apply_type]);
  const checkGradeType = React.useCallback(() => {
    return returnGradeType(grade_type);
  }, [grade_type]);

  return (
    <S.Wrapper>
      <S.IDPicture src={user_photo} alt="ID Photo" />
      <ul>
        <S.InfoLine isOneLine={true}>
          <h3>{name}</h3> <p>{birth_date}</p>
        </S.InfoLine>
        <S.InfoLine isOneLine={false}>
          {(school_name ? school_name + " " : "") +
            checkGradeType() +
            " " +
            checkApplyType()}
        </S.InfoLine>
        <S.InfoLine isOneLine={false}>
          <p>{address}</p>
          <p>{detail_address}</p>
        </S.InfoLine>
      </ul>
    </S.Wrapper>
  );
}
export default BasicInfo;
