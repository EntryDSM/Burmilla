import * as React from "react";

import * as S from "../style";
import { Checkbox } from "../../../Common";
import { ApplicantListItem } from "../../../../data/api/apiTypes";
import { useApplicant } from "../../../../hooks/applicant";
import { returnRegion, returnApplyType } from "../../../../utils/checkType";

interface Props {
  applicantInfo: ApplicantListItem;
  handleClick: (email: string) => void;
}

function ApplicantsListItem({
  applicantInfo: {
    receipt_code,
    email,
    name,
    is_daejeon,
    apply_type,
    is_arrived,
    is_paid,
    is_final_submit,
  },
  handleClick,
}: Props) {
  const {
    applicantStore: { currnetApplicantInfo },
  } = useApplicant();
  const checkRegion = React.useCallback(() => {
    return returnRegion(is_daejeon);
  }, [is_daejeon]);
  const checkApplyType = React.useCallback(() => {
    return returnApplyType(apply_type);
  }, [apply_type]);
  const checkSubmitStatus = React.useCallback(
    () => (is_final_submit ? "완료" : "미완료"),
    [is_final_submit]
  );

  return (
    <S.TR
      isSelected={
        email === currnetApplicantInfo?.applicant_information?.privacy?.email ||
        email === currnetApplicantInfo?.applicant_contact?.email
      }
      onClick={() => handleClick(email)}
    >
      <S.TD>{receipt_code}</S.TD>
      <S.TD>{name}</S.TD>
      <S.TD>{checkRegion()}</S.TD>
      <S.TD>{checkApplyType()}</S.TD>
      <S.TD>
        <S.CheckboxWrapper>
          <Checkbox isChecked={is_arrived} />
        </S.CheckboxWrapper>
      </S.TD>
      <S.TD>
        <S.CheckboxWrapper>
          <Checkbox isChecked={is_paid} />
        </S.CheckboxWrapper>
      </S.TD>
      <S.TD>{checkSubmitStatus()}</S.TD>
    </S.TR>
  );
}

export default React.memo(ApplicantsListItem);
