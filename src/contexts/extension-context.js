import { createContext, useContext, useState } from "react";

const ExtensionContext = createContext(null);

const useExtension = () => useContext(ExtensionContext);

const ExtensionProvider = ({ children }) => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [usertask, setUsertask] = useState(
    localStorage.getItem("usertask") || ""
  );

  return (
    <ExtensionContext.Provider
      value={{ username, setUsername, usertask, setUsertask }}
    >
      {children}
    </ExtensionContext.Provider>
  );
};

export { useExtension, ExtensionProvider };
