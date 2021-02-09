import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
declare type Props = {
    id: string;
    accessibility: string;
    onChange(value: string): void;
    onClear?(): void;
    onFocus?(): void;
    onBlur?(): void;
    leftIcon?: boolean;
    iconColor?: string;
    placeholder?: string;
    wrapperHeight?: number;
    inputPadding?: number;
    iconSize?: number;
    hasShadow?: boolean;
    textStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    placeholderTextColor?: string;
    onSubmit?(): void;
    autoFocus?: boolean;
};
declare const SearchInput: React.FC<Props>;
export default SearchInput;
//# sourceMappingURL=index.d.ts.map