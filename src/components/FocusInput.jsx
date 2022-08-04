import { useExtension } from "../contexts/extension-context";

export const FocusInput = () => {
  const { usertask, setUsertask } = useExtension();
  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("usertask", usertask);
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <span className="app-text">What is your main focus for today?</span>
      <input
        className="app-input"
        value={usertask}
        onChange={(e) => setUsertask(e.target.value)}
        required
      />
    </form>
  );
};
