import { FocusInput, FocusMessage, Greeting } from ".";
import { useExtension } from "../contexts/extension-context";

export const Main = () => {
  // const usertask = useExtension();
  const task = localStorage.getItem("usertask");
  return (
    <>
      <section className="app-main container">
        <Greeting />
        {task ? <FocusMessage /> : <FocusInput />}
      </section>
    </>
  );
};
