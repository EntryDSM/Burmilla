import * as React from 'react';

import * as S from './style';

interface Props {
  applicant_contact: {
    email: string;
    applicant_tel: number;
    parent_tel: number;
    home_tel: number;
  };
  school_tel?: number;
}

function Unsubmitted({
  applicant_contact: { email, applicant_tel, parent_tel, home_tel },
  school_tel,
}: Props) {
  return (
    <S.Wrapper>
      <h3>최종제출을 하지 않은 지원자입니다.</h3>
      <table>
        <tbody>
          <S.BasicInfoTableTR>
            <th>이메일</th>
            <td>{email}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>학생 연락처</th>
            <td>{applicant_tel}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>부모님 연락처</th>
            <td>{parent_tel}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>학교 연락처</th>
            <td>{school_tel}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>자택 연락처</th>
            <td>{school_tel}</td>
          </S.BasicInfoTableTR>
        </tbody>
      </table>
    </S.Wrapper>
  );
}

export default Unsubmitted;
