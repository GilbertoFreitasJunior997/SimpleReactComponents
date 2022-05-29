import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { ValidationModes } from "../../formProps";
import { IValidatableInput } from "../props";
import ITextBoxProps, { ITextBoxRef } from "./props";

function TextBoxInput({ name, inputProps, validation, ...props }: ITextBoxProps, ref: ForwardedRef<ITextBoxRef>) {
    const inputRef = useRef<HTMLInputElement>(null);
    const validate = async (value: string) => {
        if (!validation) return;
        else return await validation(value);
    };

    const updateValue = (mode: ValidationModes, value?: string) => {
        if (value !== null && value !== undefined) {
            const thisInput = inputProps.inputsRefs.current.find(x => x.name === name)
            if (thisInput) {
                if (thisInput.value !== value) {
                    inputProps.inputsRefs.current.map(x => {
                        if (x.name === name)
                            x.value = value;
                        return x;
                    })
                }
            }
            else
                inputProps.inputsRefs.current.push({ validate, value: inputProps.controller.current[name], name });

            inputProps.controller.current[name] = value;

            if (inputProps.validationMode === "all" || inputProps.validationMode === mode)
                validate(value);
        }
    };

    useImperativeHandle(ref, () => ({
        validate,
    }))

    useEffect(() => {
        const thisInput = inputProps.inputsRefs.current.find(x => x.name === name);
        if (!thisInput)
            inputProps.inputsRefs.current.push({ validate, value: inputProps.controller.current[name], name });
    })

    return (
        <>
            <input
                name={name}
                ref={inputRef}
                {...props}
                defaultValue={inputProps.controller.current[name] || ""}
                onChange={async (e) => {
                    const val = e.target.value;
                    updateValue("onChange", val)
                }}
                onBlur={(e) => {
                    const val = e.target.value;
                    updateValue("onBlur", val)
                }}
            />
        </>
    )
}


const TextBox = forwardRef<IValidatableInput, ITextBoxProps>((props, inputRef) => TextBoxInput(props, inputRef));
export default TextBox;