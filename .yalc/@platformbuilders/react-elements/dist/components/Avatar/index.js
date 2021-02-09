import { __rest } from "tslib";
import React from 'react';
import { DefaultAvatar } from './styles';
const Avatar = (_a) => {
    var { src, alt = '', variant = 'circle', onPress } = _a, rest = __rest(_a, ["src", "alt", "variant", "onPress"]);
    return (React.createElement(DefaultAvatar, Object.assign({ alt: alt, src: src, variant: variant, onPress: onPress }, rest)));
};
export default Avatar;
//# sourceMappingURL=index.js.map