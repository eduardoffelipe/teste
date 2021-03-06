import { ChangeEvent, FocusEvent } from 'react';
export declare type TextInputType = {
    mask?: string;
    maskType?: string;
    label?: string;
    error?: string | boolean;
    placeholder?: string;
    fullWidth?: boolean;
    name: string;
    id: string;
    type: string;
    maxlength?: string;
    pattern?: string;
    value: string | number | string[] | undefined;
    autoFocus?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement> | ChangeEvent<HTMLDivElement>) => void;
};
//# sourceMappingURL=TextInput.d.ts.map