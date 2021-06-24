import * as React from "react";

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

function DetailInfo({
  applicantPrivacy: { applicant_tel, parent_tel, school_tel, email, home_tel },
  applicantEvaluation: {
    volunteer_time,
    conversion_score,
    full_absent_count,
    early_leave_count,
    late_count,
    period_absent_count,
  },
}: Props) {
  const setContactForm = React.useCallback((contact: string) => {
    return returnContact(contact);
  }, []);

  return (
    <S.DetailInfoTable>
      <tbody>
        <tr>
          <th>학생 연락처</th>
          <td>{setContactForm(applicant_tel)}</td>
          <th>부모님 연락처</th>
          <td>{setContactForm(parent_tel)}</td>
        </tr>
        <tr>
          <th>학교 연락처</th>
          <td>{setContactForm(school_tel)}</td>
          <th>이메일</th>
          <td>{email}</td>
        </tr>
        <tr>
          <th>자택 연락처</th>
          <td>{setContactForm(home_tel)}</td>
        </tr>
        <tr>
          <th>봉사시간</th>
          <td>{volunteer_time || 0} 시간</td>
          <th>성적 점수</th>
          <td>{conversion_score || 0} 점</td>
        </tr>
        <tr>
          <th rowSpan={2}>출석정보</th>
          <td>
            <div>
              <span>전체 무단 결석 일수</span>
              <span>{full_absent_count || 0} 일</span>
            </div>
          </td>
          <td colSpan={2}>
            <div>
              <span>전체 무단 조퇴 일수</span>
              <span>{early_leave_count || 0} 일</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span>전체 무단 지각 일수</span> <span>{late_count || 0} 일</span>
            </div>
          </td>
          <td colSpan={2}>
            <div>
              <span>전체 무단 결과 일수</span>
              <span>{period_absent_count || 0} 일</span>
            </div>
          </td>
        </tr>
      </tbody>
    </S.DetailInfoTable>
  );
}
export default DetailInfo;
