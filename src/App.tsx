import { FC, useState } from "react";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

const App:FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalVisible(true)}>
        Open Modal!
      </Button>

      <Modal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title="Modal Title"
      >
        Modal body
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Modal>
    </>
  )
}

export default App;