import { FC, FormEvent, ForwardedRef, forwardRef, MutableRefObject, useCallback, useImperativeHandle, useRef, useEffect } from 'react';
import IFormProps from './formProps';

const Form: FC<IFormProps> = ({ children }) => {
    const { inputProps, handleSubmit } = useForm<{
        codigo: number;
        descricao: string;
    }>();

    const onSubmit = (data: any) => {
        console.log("valid");
    }

    return (
        <form
            onSubmit={async e => handleSubmit(e, onSubmit, () => console.log("invalid"))}
        >
            <Input
                name="codigo"
                placeholder="codigo"
                type="number"
                inputProps={inputProps}
            />

            <Input
                name="descricao"
                placeholder="descricao"
                type="text"
                inputProps={inputProps}
                validation={(val: string) => {
                    if (val.length < 5) {
                        return "desc < 5";
                    }
                }}
            />

            <button
                type="submit"
            >
                Submit
            </button>

        </form>
    )
}

export default Form;

type ValidationModes = 'onSubmit' | 'onChange' | 'onBlur' | 'all';

interface UseFormProps<T> {
    validationMode?: ValidationModes;
    initialValues?: T;
};
function useForm<T>({ validationMode, initialValues }: UseFormProps<T> = {}) {
    const controller = useRef<T>(initialValues || ({} as T));
    const inputsRefs = useRef<{
        validate: (value: string) => string | void | Promise<string | void>,
        value: string,
        name: keyof T,
    }[]>([]);

    function getValue(inputName: keyof T): T[keyof T] {
        return controller.current[inputName];
    }

    const handleSubmit = async (submitEvent: FormEvent<HTMLFormElement>, onSubmit?: (data: T) => void, onError?: () => void) => {
        submitEvent.preventDefault();
        let isValid = true;
        inputsRefs.current.forEach(async input => {
            const r = await input.validate(input.value || '');
            if (typeof r !== "string") {
                isValid = false;
            }
        })
        if (isValid)
            onSubmit && onSubmit(controller.current);
        else
            onError && onError();
    }

    return {
        getValue,
        handleSubmit,
        inputProps: {
            controller,
            validationMode: validationMode || 'onSubmit',
            inputsRefs,
        }
    };
}

interface IValidatableInput {
    validate: (value: string) => Promise<string | void>;
}

interface InputRef extends IValidatableInput {

}

interface InputProps {
    name: string;
    inputProps: {
        controller: MutableRefObject<any>;
        validationMode: ValidationModes;
        inputsRefs: MutableRefObject<{
            name: string;
            validate(value: string): void;
            value: string;
        }[]>;
    }

    validation?(value: string): string | void | Promise<string | void>;
    placeholder?: string;
    type?: string;
}

function InputComp({ name, inputProps, validation, ...props }: InputProps, ref: ForwardedRef<InputRef>) {
    const inputRef = useRef<HTMLInputElement>(null);
    const validate = useCallback(async (value: string) => {
        // true = valid; false = invalid;
        if (!validation) return;
        else return await validation(value);
    }, [validation])

    const updateValue = useCallback((mode: ValidationModes, value?: string) => {
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
    }, [inputProps, name, validate])

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

const Input = forwardRef<IValidatableInput, InputProps>((props, inputRef) => InputComp(props, inputRef));
