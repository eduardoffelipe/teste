import { __rest } from "tslib";
import React from 'react';
import { isString } from '../../utils/helpers';
import { ErrorText } from './styles';
const FormError = (_a) => {
    var { children, error } = _a, rest = __rest(_a, ["children", "error"]);
    const isErrorValid = isString(error);
    return (React.createElement(React.Fragment, null,
        children,
        isErrorValid && React.createElement(ErrorText, Object.assign({}, rest), error)));
};
export default FormError;
//# sourceMappingURL=index.js.map