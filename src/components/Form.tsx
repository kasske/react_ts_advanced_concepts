import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
        clear() {
            console.log('Clearing');
            form.current?.reset();
        }
    }
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);

    const data = Object.fromEntries(formdata.entries()); // convert to simpler object

    onSave(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...otherProps}
      ref={form}
    >
      {children}
    </form>
  );
});

export default Form;
