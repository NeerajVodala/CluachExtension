import { FocusInput, FocusMessage, Greeting } from "../components";

export const Main = () => {
  return (
    <>
      <main className="app-main container">
        <Greeting />
        <FocusInput />
        <FocusMessage />
      </main>
    </>
  );
};
