/// <reference types="react" />
declare type WrapperProps = {
    height?: number;
    inputPadding?: number;
    hasShadow?: boolean;
};
export declare const Wrapper: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, WrapperProps, never>;
declare type InputProps = {
    iconColor?: string;
    iconSize?: number;
    inputHeight?: number | string;
    inputPadding?: number;
};
export declare const Input: import("styled-components").StyledComponent<import("react").FC<import("../..").TextInputType>, any, {
    iconColor: string;
    iconTouchableEnabled: true;
    iconSize: number;
} & InputProps, "iconSize" | "iconTouchableEnabled" | "iconColor">;
export {};
//# sourceMappingURL=styles.d.ts.map