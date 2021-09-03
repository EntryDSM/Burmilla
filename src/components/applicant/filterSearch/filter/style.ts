import { pxToRem } from 'src/styles';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2.5%;
  margin-top: 10px;
`;

export const FilterSelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  min-width: ${pxToRem(652.8)}rem;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  min-width: ${pxToRem(416)}rem;
`;

export const FilterItemContainer = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > p {
    display: inline-block;
    color: #3f3f3f;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`;
