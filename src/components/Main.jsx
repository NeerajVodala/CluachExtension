import { FocusInput, FocusMessage, Greeting } from ".";

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
