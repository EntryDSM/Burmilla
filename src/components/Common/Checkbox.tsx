import * as React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  width: 14px;
  height: 14px;
  background: #fcfcfc;
  border: solid #606060 1px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const Check = styled.img`
  width: 12px;
`;

interface Props {
  isChecked: boolean;
}

function Checkbox({ isChecked }: Props) {
  return (
    <CheckboxWrapper>{isChecked && <Check alt="checked" />}</CheckboxWrapper>
  );
}

export default Checkbox;
