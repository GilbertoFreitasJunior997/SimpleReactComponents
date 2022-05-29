import { FC } from "react";
import TextBox from "./Components/Form/Inputs/TextBox";
import useForm from './Components/Form/useForm';

interface IMarca {
  codigo?: number;
  descricao?: string;
}

const App: FC = () => {
  const { inputProps, handleSubmit } = useForm<IMarca>({
    initialValues: {
      codigo: 20,
    }
  });

  const onSubmit = (data: IMarca) => {
    console.log(data);
  }

  const onError = (errors: string[]) => {
    console.log(errors);
  }

  return (
    <form
      onSubmit={(e) => handleSubmit({ e, onSubmit, onError })}
    >
      <TextBox
        name="codigo"
        inputProps={inputProps}
      />

      <TextBox
        name="descricao"
        inputProps={inputProps}
      />

      <button type="submit">
        submit
      </button>
    </form>
  )
}

export default App;
