import { __rest } from "tslib";
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MaterialIcon from '@material-ui/core/Icon';
const Icon = (_a) => {
    var { name, color = 'inherit', size = 'default' } = _a, rest = __rest(_a, ["name", "color", "size"]);
    return (React.createElement(IconButton, Object.assign({ color: "inherit", edge: "start" }, rest),
        React.createElement(MaterialIcon, { color: color, fontSize: size }, name)));
};
export default Icon;
//# sourceMappingURL=index.js.map