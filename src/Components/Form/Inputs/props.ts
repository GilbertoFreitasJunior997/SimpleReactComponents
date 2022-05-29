import { IUseFormInputProps, IUseFormInputRefs, ValidationModes } from "../formProps";

export default interface IDefaultInputProps {
    name: string;
    inputProps: IUseFormInputProps<any>;

    validation?(value: string): string | void | Promise<string | void>;
    placeholder?: string;
    type?: string;
}

export interface IValidatableInput {
    validate: (value: string) => Promise<string | void>;
}
