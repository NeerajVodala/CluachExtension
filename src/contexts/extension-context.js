import { createContext, useContext } from "react";

const ExtensionContext = createContext(null);

const useExtension = () => useContext(ExtensionContext);

const ExtensionProvider = ({ children }) => {
  return <ExtensionContext.Provider>{children}</ExtensionContext.Provider>;
};

export { useExtension, ExtensionProvider };
