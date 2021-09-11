import React, { FC } from "react";

import * as S from "./style";
import {
  ApplicantPersonalData,
  ApplicantEvaluation,
} from "../../../../../data/api/apiTypes";
import { phoneWithHyphen } from "../../../../../utils/checkType";

interface Props {
  applicantPersonalData: ApplicantPersonalData;
  applicantEvaluation: ApplicantEvaluation;
}

const DetailInfo: FC<Props> = ({
  applicantPersonalData: { telephone_number, parent_tel, email, home_tel },
  applicantEvaluation: { conversion_score },
}) => {
  const setContactForm = React.useCallback((contact: string) => {
    return phoneWithHyphen(contact);
  }, []);

  return (
    <S.QualificationexamDetailInfoTable>
      <tbody>
        <tr>
          <th>학생 연락처</th> <td>{setContactForm(telephone_number)}</td>
        </tr>
        <tr>
          <th>부모님 연락처</th> <td>{setContactForm(parent_tel)}</td>
        </tr>
        <tr>
          <th>이메일</th> <td>{email}</td>
        </tr>
        <tr>
          <th>자택 연락처</th> <td>{setContactForm(home_tel)}</td>
        </tr>
        <tr>
          <th>검정고시 평균 점수</th> <td>{conversion_score}점</td>
        </tr>
      </tbody>
    </S.QualificationexamDetailInfoTable>
  );
};
export default DetailInfo;
