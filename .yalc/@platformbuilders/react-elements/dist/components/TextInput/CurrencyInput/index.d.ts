import { ChangeEvent, FC } from 'react';
declare type Props = {
    id: string;
    name?: string;
    label?: string;
    value: string | number | string[] | undefined;
    error?: string | boolean;
    onChangeText?: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare const CurrencyInputComponent: FC<Props>;
export default CurrencyInputComponent;
//# sourceMappingURL=index.d.ts.map