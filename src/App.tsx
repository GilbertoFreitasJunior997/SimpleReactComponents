import { FC } from "react";
import Button from "./Components/Button";

const App:FC = () => {
  return (
    <>
      <Button onClick={() => console.log("CLICKED!")}>
        Thats a cool button!
      </Button>
    </>
  )
}

export default App;