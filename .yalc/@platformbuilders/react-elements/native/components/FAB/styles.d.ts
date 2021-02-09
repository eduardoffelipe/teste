/// <reference types="react" />
declare type WrapperProps = {
    color?: string;
    size: number;
    relativePos: boolean;
    hasShadow: boolean;
};
export declare const Wrapper: import("styled-components").StyledComponent<import("react").FC<import("../..").TouchableType>, any, WrapperProps, never>;
interface IconProps {
    iconColor?: string;
    iconSize?: number;
}
export declare const Icon: import("styled-components").StyledComponent<import("react").FC<import("../..").IconType>, any, {
    color: string;
    touchable: false;
    size: number;
} & IconProps, "size" | "color" | "touchable">;
export declare const Title: import("styled-components").StyledComponent<import("react").FC<import("../..").TypographyType>, any, {
    variant: "subhead";
}, "variant">;
export {};
//# sourceMappingURL=styles.d.ts.map