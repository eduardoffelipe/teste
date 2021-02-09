/// <reference types="react" />
import DefaultCodeInput from 'react-native-smooth-pincode-input';
import { ThemeType } from '../../types';
export declare const defaultStyling: (theme?: ThemeType | undefined) => any;
export declare const Wrapper: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, {}, never>;
export declare const PinCodeInput: import("styled-components").StyledComponent<typeof DefaultCodeInput, any, {}, never>;
declare type IconProps = {
    contrast: boolean;
    error: boolean;
};
export declare const Icon: import("styled-components").StyledComponent<import("react").FC<import("../../types").IconType>, any, {
    color: any;
} & IconProps, "color">;
declare type CaptionProps = {
    centered: boolean;
};
export declare const CaptionText: import("styled-components").StyledComponent<import("react").FC<import("../../types").TypographyType>, any, {
    variant: "footnote";
} & CaptionProps, "variant">;
export {};
//# sourceMappingURL=styles.d.ts.map