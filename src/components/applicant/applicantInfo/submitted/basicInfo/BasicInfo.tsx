import React, { FC } from "react";
import * as S from "./style";
import { ApplicantPersonalData } from "../../../../../data/api/apiTypes";
import {
  returnApplicationType,
  returnEducationalType,
} from "../../../../../utils/checkType";

interface Props {
  applicantPersonalData: ApplicantPersonalData;
}

const BasicInfo: FC<Props> = ({
  applicantPersonalData: {
    photo_url,
    name,
    birth_date,
    school_name,
    educational_status,
    application_type,
    address,
    detail_address,
  },
}) => {
  const checkApplicationType = React.useCallback(() => {
    return returnApplicationType(application_type);
  }, [application_type]);
  const checkEducationalType = React.useCallback(() => {
    return returnEducationalType(educational_status);
  }, [educational_status]);

  return (
    <S.Wrapper>
      <S.IDPicture src={photo_url} alt="ID Photo" />
      <ul>
        <S.InfoLine isOneLine={true}>
          <h3>{name}</h3> <p>{birth_date}</p>
        </S.InfoLine>
        <S.InfoLine isOneLine={false}>
          {(school_name ? school_name + " " : "") +
            checkEducationalType() +
            " " +
            checkApplicationType()}
        </S.InfoLine>
        <S.InfoLine isOneLine={false}>
          <p>{address}</p>
          <p>{detail_address}</p>
        </S.InfoLine>
      </ul>
    </S.Wrapper>
  );
};
export default BasicInfo;
