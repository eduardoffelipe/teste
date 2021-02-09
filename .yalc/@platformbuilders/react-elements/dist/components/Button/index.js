import { __rest } from "tslib";
import React from 'react';
import { StyledButton, LoadingIndicator } from './styles';
import If from '../If';
const Button = (_a) => {
    var { children, type, onPress, loading = false, disabled = false, secondary = false } = _a, rest = __rest(_a, ["children", "type", "onPress", "loading", "disabled", "secondary"]);
    return (React.createElement(StyledButton, Object.assign({ onClick: onPress, disabled: disabled, secondary: secondary || undefined, type: type || undefined }, rest),
        React.createElement(If, { condition: !!loading },
            React.createElement(LoadingIndicator, { secondary: secondary || undefined })),
        React.createElement(If, { condition: !loading }, children)));
};
export default Button;
//# sourceMappingURL=index.js.map