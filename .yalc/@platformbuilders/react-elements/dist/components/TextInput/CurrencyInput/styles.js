import styled from 'styled-components';
import { getTheme, ifStyle, pxToRem } from '../../../utils/helpers';
const textColor = getTheme('text');
const primaryMain = getTheme('primary.main');
const smallSpacing = getTheme('smallSpacing');
const failureColor = getTheme('failure');
const hasError = ifStyle('selected');
export const Wrapper = styled.div `
  position: relative;
`;
export const Input = styled.input `
  font-size: ${pxToRem(16)};
  padding: ${smallSpacing} 0;
  display: block;
  width: ${pxToRem(300)};
  border: none;
  border-bottom: ${pxToRem(1)} solid ${textColor}80;
  color: ${hasError(failureColor, textColor)};

  :focus {
    outline: none;
  }

  :focus ~ label {
    top: ${pxToRem(-20)};
    font-size: ${pxToRem(14)};
    color: ${primaryMain};
  }

  :valid ~ label {
    top: ${pxToRem(-20)};
    font-size: ${pxToRem(14)};
  }

  :focus ~ .bar:before,
  :focus ~ .bar:after {
    width: 50%;
  }
`;
export const Bar = styled.span `
  position: absolute;
  bottom: ${pxToRem(-1)};
  display: block;
  width: 100%;

  :before,
  :after {
    content: '';
    height: ${pxToRem(2)};
    width: 0;
    bottom: ${pxToRem(1)};
    position: absolute;
    background: ${hasError(failureColor, primaryMain)};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  :before {
    left: 50%;
    width: ${hasError('50%', 0)};
  }

  :after {
    right: 50%;
    width: ${hasError('50%', 0)};
  }
`;
export const Label = styled.label `
  color: ${hasError(failureColor, textColor)};
  font-size: ${pxToRem(18)};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: ${pxToRem(10)};
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;
//# sourceMappingURL=styles.js.map