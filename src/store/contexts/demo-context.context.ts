import { createContext } from "react";

interface ValueMyContext {
  currentValue: number;
  updateValue: (value: number) => void;
}

export const MyContext = createContext<ValueMyContext>({
  currentValue: 0,
  updateValue: () => {},
}); //esta variable es un object
