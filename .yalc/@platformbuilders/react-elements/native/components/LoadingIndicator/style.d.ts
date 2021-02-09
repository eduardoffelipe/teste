import Animation from 'lottie-react-native';
import { AnimationObject, LoadingVariants } from '../../types';
export declare const circularLoading: ({ theme }: any) => string;
export declare const contrastCircularLoading: ({ theme }: any) => string;
export declare const buttonLoading: ({ theme }: any) => string;
export declare const contrastButtonLoading: ({ theme }: any) => string;
export declare const linearLoading: ({ theme }: any) => string;
export declare const contrastLinearLoading: ({ theme }: any) => string;
declare type IndicatorProps = {
    contrast: boolean;
    variant: LoadingVariants;
    testID: string;
    accessibilityLabel: string;
};
export declare const smallSize: {
    width: number;
    height: number;
};
export declare const largeSize: {
    width: number;
    height: number;
};
export declare const Indicator: import("styled-components").StyledComponent<typeof Animation, any, {
    source: string | AnimationObject | {
        uri: string;
    };
    autoPlay: true;
    loop: true;
} & IndicatorProps, "source" | "loop" | "autoPlay">;
export {};
//# sourceMappingURL=style.d.ts.map