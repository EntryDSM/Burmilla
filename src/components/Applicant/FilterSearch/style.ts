import styled from 'styled-components';
import {pxToRem} from "../../../styles"

const FilterSearchWrapper = styled.div`
  width: ${pxToRem(1024)}rem;
  height: 14%;
  display: flex;
  flex-direction: column;
  padding: 0.5% 6%;
  margin-bottom: 10px;
  box-sizing: border-box;
  justify-content: flex-end;
  position: relative;
`;

export default FilterSearchWrapper;
