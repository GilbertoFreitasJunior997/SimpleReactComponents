import { FC, useMemo } from "react";
import Datagrid from "./Components/Datagrid";

const App: FC = () => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [currStep, setCurrStep] = useState(0);
  // const steps = ["Step one", "Step two", "Step three", "Step four"]

  const source = useMemo(() => {
    const data: any[] = [];
    for (let i = 1; i <= 100; i++) {
      data.push({
        id: i,
        name: `Name ${i}`,
        email: `email@${i}.com`,
      })
    };
    return data;
  }, [])

  const commomData: {
    label?: string;
    labelPosition?: 'left' | 'center' | 'right';
    labelVerticalAlign?: boolean;
    labelStyle?: React.CSSProperties;
    dataPosition?: 'left' | 'center' | 'right';
    dataVerticalAlign?: boolean;
  } = {
    labelPosition: 'center',
    labelVerticalAlign: true,
    dataPosition: "center",
    dataVerticalAlign: true,
  }

  return (
    <>
      <Datagrid
        source={source}
        columns={[
          {
            dataField: "id",
            label: "Id",
            ...commomData,
          },
          {
            dataField: "name",
            label: "Name",
            ...commomData,
          },
          {
            dataField: "email",
            label: "Email",
            ...commomData,
          }
        ]}
      />
    </>
  )
}

export default App;

/* <Stepper
        step={currStep}
        steps={steps}
      />
      <div style={{width: "90%", margin: "10px auto", display: "flex", justifyContent: "space-between"}}>
        <Button onClick={() => currStep - 1 >= 0 && setCurrStep(v => v - 1)}>
          Prev
        </Button>
        <Button onClick={() => currStep + 1 < steps.length && setCurrStep(v => v + 1)}>
          Next
        </Button>
      </div>

      <Button onClick={() => setIsModalVisible(true)}>
        Open Modal!
      </Button>

      <Modal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title="Lorem Ipsum"
        onConfirm={async () => {
          alert("Confirm clicked!");
        }}
      >
        Dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus velit vitae massa tristique tempor. Nulla vehicula, lacus eget maximus faucibus, mi est luctus felis, non rutrum sem sem vitae nulla. Aenean vel placerat leo. Integer fermentum pulvinar leo, id venenatis turpis efficitur in. Quisque quis nunc volutpat, rutrum nulla ac, pulvinar diam. Cras non ipsum sed diam semper ullamcorper. Nunc aliquet sem id quam tempus hendrerit. Donec dolor leo, placerat sit amet fermentum bibendum, facilisis sit amet nisl. Duis imperdiet, diam vel dapibus lacinia, augue turpis posuere mi, vel volutpat est ligula non augue.
        Nunc lobortis maximus odio, id cursus neque dignissim ac. Nullam tristique sapien elit, sed pellentesque neque maximus id. Vestibulum et mi laoreet, fringilla est id, aliquam leo. Quisque finibus sem in metus tempor, a porttitor dolor feugiat. Nam blandit, lectus eget vestibulum accumsan, ligula risus imperdiet nulla, et malesuada dolor dui at erat. Proin nisi lorem, vulputate rutrum leo ac, consectetur convallis nulla. Maecenas porta risus eget ultricies convallis. Morbi pretium eget tellus in ultricies. Ut ac tristique lectus, id mattis sem. Integer dapibus mi sed massa pharetra, a sodales nibh sodales. Nam feugiat arcu id nibh ultricies, at tempor lacus consectetur. Donec imperdiet efficitur lorem, aliquam venenatis metus ultrices ut.
        Nullam eleifend mi ac dui molestie sollicitudin. Proin sollicitudin vulputate interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vitae mauris orci. Morbi ullamcorper, augue sed tempus iaculis, nisi mi egestas erat, eu volutpat nunc eros cursus velit. Vivamus velit metus, tincidunt id sagittis sed, finibus condimentum ex. Quisque lobortis arcu non velit ornare, sit amet ultricies libero ornare. Proin convallis eget libero in feugiat.
        Donec non velit nec purus tempor commodo. Maecenas vel interdum arcu. Ut sit amet est ex. Nullam gravida eros arcu. Etiam quis venenatis odio, non malesuada nunc. Fusce fermentum, elit at vulputate dignissim, enim purus facilisis nulla, eu rutrum ligula tellus ut mauris. Nullam nec interdum dui, at facilisis lectus. In imperdiet purus ipsum. Integer aliquam in quam sed fermentum. Sed aliquam non metus ut dignissim. Etiam luctus blandit lacus, id iaculis felis tempus eget. Cras orci neque, porttitor in sapien non, semper volutpat massa. Donec ut lacinia lectus. Fusce eget metus diam. Duis ac vulputate urna, ut feugiat tortor. Praesent euismod sapien vitae lectus congue tristique.
        Nunc in luctus turpis. Suspendisse non fermentum purus, a volutpat odio. Praesent viverra commodo nisl, eget commodo tellus facilisis at. Quisque ut varius purus, vel condimentum ipsum. Suspendisse malesuada leo quis tincidunt finibus. In hendrerit erat quis felis scelerisque, a vulputate dolor luctus. Integer ut odio non magna lacinia volutpat. Nunc et tellus at orci sodales gravida ac a magna. Suspendisse aliquam urna vitae justo aliquam pretium. Proin elementum efficitur dui vitae accumsan.
      </Modal> */