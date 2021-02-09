const ObjectType = {
    STRING: '[object String]',
};
const getType = (value) => {
    return Object.prototype.toString.call(value);
};
export const isString = (value) => getType(value) === ObjectType.STRING;
//# sourceMappingURL=index.js.map