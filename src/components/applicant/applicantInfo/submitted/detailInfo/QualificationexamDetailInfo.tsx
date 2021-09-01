import React, { FC } from "react";

import * as S from "./style";
import {
  applicantPersonalData,
  applicantEvaluation,
} from "../../../../../data/modules/redux/reducer/applicant/interface";
import { returnContact } from "../../../../../utils/checkType";

interface Props {
  applicantPersonalData: applicantPersonalData;
  applicantEvaluation: applicantEvaluation;
}

const DetailInfo: FC<Props> = ({
  applicantPersonalData: { telephone_number, parent_tel, email, home_tel },
  applicantEvaluation: { conversion_score },
}) => {
  const setContactForm = React.useCallback((contact: string) => {
    return returnContact(contact);
  }, []);

  return (
    <S.DetailInfoTable>
      <tbody>
        <tr>
          <th>학생 연락처</th> <td>{setContactForm(telephone_number)}</td>
          <th>부모님 연락처</th> <td>{setContactForm(parent_tel)}</td>
        </tr>
        <tr>
          <th>이메일</th> <td>{email}</td>
          <th>자택 연락처</th> <td>{setContactForm(home_tel)}</td>
        </tr>
        <tr>
          <th>검정고시 평균 점수</th> <td>{conversion_score}점</td>
        </tr>
      </tbody>
    </S.DetailInfoTable>
  );
};
export default DetailInfo;
