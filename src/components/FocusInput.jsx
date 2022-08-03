import { useState } from "react";

export const FocusInput = () => {
  const [username, setUsername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("yes");
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <span className="app-text">What is your main focus for today?</span>
      <input
        className="app-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </form>
  );
};
