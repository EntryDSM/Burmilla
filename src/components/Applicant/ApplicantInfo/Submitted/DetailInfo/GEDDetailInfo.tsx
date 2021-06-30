import React, { FC } from "react";

import * as S from "./style";
import {
  ApplicantPrivacy,
  ApplicantEvaluation,
} from "../../../../../data/api/apiTypes";
import { returnContact } from "../../../../../utils/checkType";

interface Props {
  applicantPrivacy: ApplicantPrivacy;
  applicantEvaluation: ApplicantEvaluation;
}

const DetailInfo: FC<Props> = ({
  applicantPrivacy: { applicant_tel, parent_tel, email, home_tel },
  applicantEvaluation: { conversion_score },
}) => {
  const setContactForm = React.useCallback((contact: string) => {
    return returnContact(contact);
  }, []);

  return (
    <S.DetailInfoTable>
      <tbody>
        <tr>
          <th>학생 연락처</th> <td>{setContactForm(applicant_tel)}</td>
          <th>부모님 연락처</th> <td>{setContactForm(parent_tel)}</td>
        </tr>
        <tr>
          <th>자택 연락처</th> <td>{setContactForm(home_tel)}</td>
          <th>이메일</th> <td>{email}</td>
        </tr>
        <tr>
          <th>평균 점수</th> <td>{conversion_score}점</td>
        </tr>
      </tbody>
    </S.DetailInfoTable>
  );
};
export default DetailInfo;
