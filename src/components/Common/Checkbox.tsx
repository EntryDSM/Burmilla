import React, { FC } from "react";
import styled from "styled-components";
import { selected } from "../../assets/applicants";

const CheckboxWrapper = styled.div`
  width: 13.8px;
  height: 14px;
  background: #fcfcfc;
  border: 1px solid #606060;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const Check = styled.img`
  width: 9px;
  height: 9px;
`;

interface Props {
  isChecked: boolean;
}

const Checkbox: FC<Props> = ({ isChecked }: Props) => {
  return (
    <CheckboxWrapper>
      {isChecked && <Check src={selected} alt="checked" />}
    </CheckboxWrapper>
  );
};

export default Checkbox;
