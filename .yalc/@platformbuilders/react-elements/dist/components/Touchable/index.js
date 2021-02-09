import { __rest } from "tslib";
import React from 'react';
import { CustomTouchable } from './styles';
const Touchable = (_a) => {
    var { children, onPress } = _a, rest = __rest(_a, ["children", "onPress"]);
    return (React.createElement(CustomTouchable, Object.assign({ onClick: onPress }, rest), children));
};
export default Touchable;
//# sourceMappingURL=index.js.map