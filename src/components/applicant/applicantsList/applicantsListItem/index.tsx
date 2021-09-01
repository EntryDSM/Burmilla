import React, { FC } from "react";

import * as S from "../style";
import { Checkbox } from "../../../common";
import {
  returnRegion,
  returnApplicationType,
} from "../../../../utils/checkType";
import {
  ApplicantListItem,
  GetApplicantsListPayload,
} from "../../../../data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  applicantInfo: ApplicantListItem;
  handleClick: (receipt_code: number) => void;
}

const ApplicantsListItem: FC<Props> = ({
  filters,
  applicantInfo: {
    receipt_code,
    name,
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
    <S.TR
      isSelected={receipt_code === filters?.receipt_code}
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
  );
};

export default React.memo(ApplicantsListItem);
