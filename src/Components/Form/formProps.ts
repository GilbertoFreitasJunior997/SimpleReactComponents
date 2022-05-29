import { FormEvent, MutableRefObject } from "react";

export type ValidationModes = 'onSubmit' | 'onChange' | 'onBlur' | 'all';

export default interface IFormProps<T> extends Omit<React.HTMLProps<HTMLFormElement>, "onSubmit"> {
    onSubmit?: ((data: T) => void)
}

export interface IUseFormProps<T> {
    validationMode?: ValidationModes;
    initialValues?: T;
};

export interface IUseFormReturn<T> {
    getValue: (inputName: keyof T) => T[keyof T];
    handleSubmit(props: IUseFormHandleSubmitProps<T>): Promise<void>;
    inputProps: IUseFormInputProps<T>;
}

export interface IUseFormHandleSubmitProps<T> {
    e: FormEvent<HTMLFormElement>;
    onSubmit?(data: T): void;
    onError?(errors: string[]): void;
}

export interface IUseFormInputProps<T> {
    controller: MutableRefObject<T>;
    validationMode: ValidationModes;
    inputsRefs: MutableRefObject<IUseFormInputRefs<T>[]>
}

export interface IUseFormInputRefs<T> {
    name: keyof T;
    validate: (value: string) => string | void | Promise<string | void>;
    value: string;
}