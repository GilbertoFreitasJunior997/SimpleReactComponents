import { useRef } from 'react';
import { IUseFormProps, IUseFormInputRefs, IUseFormReturn, IUseFormHandleSubmitProps } from './formProps';

function useForm<T>({ validationMode, initialValues }: IUseFormProps<T> = {}): IUseFormReturn<T> {
    const controller = useRef<T>(initialValues || ({} as T));
    const inputsRefs = useRef<IUseFormInputRefs<T>[]>([]);

    function getValue(inputName: keyof T): T[keyof T] {
        return controller.current[inputName];
    }

    const handleSubmit = async ({ e, onError, onSubmit }: IUseFormHandleSubmitProps<T>) => {
        e.preventDefault();
        const errors: string[] = [];

        for (let i = 0; i < inputsRefs.current.length; i++) {
            const input = inputsRefs.current[i];
            const r = await input.validate(input.value || '');
            if (typeof r === "string") errors.push(r);
        }

        if (errors.length <= 0)
            onSubmit && onSubmit(controller.current);
        else
            onError && onError(errors);
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

export default useForm;
