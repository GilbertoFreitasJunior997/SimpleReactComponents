import IFormProps from "./formProps";

function Form<T = any>({ onSubmit, children, ...formProps }: IFormProps<T>) {

    return(
        <form
            // onSubmit={(e) => handleSubmit(e, onSubmit)}
        >
            {children}
        </form>
    )
}

export default Form;
