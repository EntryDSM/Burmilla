import React, { FC } from "react";
import * as S from "./style";
import { details_arrow } from "../../../../assets/applicants";
import { returnContact } from "../../../../utils/checkType";

interface Props {
  applicantInfoAppear: boolean;
  not_submitted_applicant: {
    email: string;
    applicant_tel: string;
    parent_tel: string;
    school_tel?: string;
    home_tel?: string;
  };
  setApplicantInfoAppear: (payload: boolean) => void;
}

const Unsubmitted: FC<Props> = ({
  applicantInfoAppear,
  not_submitted_applicant: {
    email,
    applicant_tel,
    parent_tel,
    home_tel,
    school_tel,
  },
  setApplicantInfoAppear,
}) => {
  const setContactForm = React.useCallback((contact: string) => {
    return returnContact(contact);
  }, []);

  const handleClickDetailArrow = () => {
    setApplicantInfoAppear(!applicantInfoAppear);
  };

  const checkIsSubmitted = () => {
    if (school_tel !== null) {
      return (
        <>
          <S.BasicInfoTableTR>
            <th>이메일</th>
            <td>{email}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>학생 연락처</th>
            <td>{setContactForm(applicant_tel)}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>부모님 연락처</th>
            <td>{setContactForm(parent_tel)}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>학교 연락처</th>
            <td>{setContactForm(school_tel)}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>자택 연락처</th>
            <td>{setContactForm(home_tel)}</td>
          </S.BasicInfoTableTR>
        </>
      );
    }
    if (school_tel === null) {
      return (
        <>
          <S.BasicInfoTableTR>
            <th>이메일</th>
            <td>{email}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>학생 연락처</th>
            <td>{setContactForm(applicant_tel)}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>부모님 연락처</th>
            <td>{setContactForm(parent_tel)}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>자택 연락처</th>
            <td>{setContactForm(home_tel)}</td>
          </S.BasicInfoTableTR>
        </>
      );
    }
  };

  return (
    <S.Wrapper>
      <S.DetailInfo
        src={details_arrow}
        onClick={() => handleClickDetailArrow()}
      />
      <h3>최종제출을 하지 않은 지원자입니다.</h3>
      <table>
        <tbody>{checkIsSubmitted()}</tbody>
      </table>
    </S.Wrapper>
  );
};

export default Unsubmitted;
