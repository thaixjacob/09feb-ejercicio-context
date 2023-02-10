import { MyContext } from "./demo-context.context";
import { FC, useState } from "react";

interface MyContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [currentValue, updateValue] = useState(0); // Esto es lo que teníamos antes en el App
  return (
    <MyContext.Provider value={{ currentValue, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
