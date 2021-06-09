import * as React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  width: 20px;
  height: 20px;
  background: #ededed;
  border: solid #9b9b9b 1px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const Check = styled.img`
  width: 16px;
`;

interface Props {
  isChecked: boolean;
}

function Checkbox({ isChecked }: Props) {
  return (
    <CheckboxWrapper>
      {isChecked && <Check alt="checked" />}
    </CheckboxWrapper>
  );
}

export default Checkbox;
