import { useRef } from "react";
import Button from "./components/Button";
// import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

/* polymorphic component */
function App() {
  const customForm = useRef<FormHandle>(null);
  const input = useRef<HTMLInputElement>(null);

  function handleSave (data: unknown) {
    const extractedData = data as { name: string, age: number };

    console.log(extractedData);

    customForm.current?.clear();
  }

  return (
    <main>
      {/* <Container as={Button}>Click me</Container> */}
      {/* <Input label="test" id="test" ref={input} /> */}
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="text" label="Age" id="age" />

        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
