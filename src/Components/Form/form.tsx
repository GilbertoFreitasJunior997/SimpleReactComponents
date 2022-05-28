import { FC, useRef } from "react";
import IFormProps from './formProps';

const Form: FC<IFormProps> = ({ children }) => {
    const { inputProps } = useForm<{
        codigo: number;
        descricao: string;
    }>({
        initialValues: {
            codigo: 20,
            descricao: "asads",
        }
    });

    const codName = "codigo";
    const descName = "descricao";

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(inputProps.controller.current);
            }}
        >
            <Input
                name={codName}
                placeholder="codigo"
                type="number"
                inputProps={inputProps}
            />

            <input
                name={descName}
                placeholder="descricao"
                type="text"
                onChange={(e) => {
                    const val = e.target.value;
                    if (val !== null && val !== undefined)
                        inputProps.controller.current[descName] = val;
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

interface UseFormProps<T> {
    mode?: 'onSubmit' | 'onChange' | 'onBlur' | 'all';
    initialValues?: T;
};
function useForm<T>({ mode, initialValues }: UseFormProps<T>) {
    const controller = useRef<T>(initialValues || ({} as T));

    return {
        inputProps: {
            controller,
            mode: mode || 'onSubmit'
        }
    };
}

interface InputProps {
    name: string;
    inputProps: {
        controller: React.MutableRefObject<any>;
        mode: any;
    }

    placeholder?: string;
    type?: string;
}

const Input: FC<InputProps> = ({ name, inputProps, ...props }) => {
    return (
        <>
            <input
                name={name}
                {...props}
                defaultValue={inputProps.controller.current[name] || ""}
                onChange={(e) => {
                    const val = e.target.value;
                    if (val !== null && val !== undefined)
                        inputProps.controller.current[name] = val;
                }}
            />
        </>
    )
}
