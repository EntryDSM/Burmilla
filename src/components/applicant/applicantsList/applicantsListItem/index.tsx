import React, { FC } from "react";
import * as S from "../style";
import { Checkbox } from "../../../common";
import {
  returnRegion,
  returnApplicationType,
} from "../../../../utils/checkType";
import {
  ApplicantListItem,
  GetApplicantInfoResponse,
} from "../../../../data/api/apiTypes";

interface Props {
  currnetApplicantInfo: GetApplicantInfoResponse;
  applicantInfo: ApplicantListItem;
  handleClick: (receipt_code: number) => void;
}

const ApplicantsListItem: FC<Props> = ({
  currnetApplicantInfo,
  applicantInfo: {
    receipt_code,
    name,
    email,
    is_daejeon,
    application_type,
    is_printed_arrived,
    is_submit,
  },
  handleClick,
}) => {
  const checkRegion = React.useCallback(() => {
    return returnRegion(is_daejeon);
  }, [is_daejeon]);
  const checkApplyType = React.useCallback(() => {
    return returnApplicationType(application_type);
  }, [application_type]);
  const checkSubmitStatus = React.useCallback(
    () => (is_submit ? "완료" : "미완료"),
    [is_submit]
  );

  return (
    <>
      <S.TR
        isSelected={
          email ===
            currnetApplicantInfo?.submitted_applicant?.personal_data?.email ||
          email === currnetApplicantInfo?.not_submitted_applicant?.email
        }
        onClick={() => handleClick(receipt_code)}
      >
        <S.TD>{receipt_code}</S.TD>
        <S.TD>{name}</S.TD>
        <S.TD>{checkRegion()}</S.TD>
        <S.TD>{checkApplyType()}</S.TD>
        <S.TD>
          <S.CheckboxWrapper>
            <Checkbox isChecked={is_printed_arrived} />
          </S.CheckboxWrapper>
        </S.TD>
        <S.TD>{checkSubmitStatus()}</S.TD>
      </S.TR>
    </>
  );
};

export default React.memo(ApplicantsListItem);
