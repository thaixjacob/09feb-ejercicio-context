import { useContext } from "react";
import { MyContext } from "../../store/contexts/demo-context.context";

const Button = () => {
  const { currentValue, updateValue } = useContext(MyContext);
  return <button onClick={() => updateValue(currentValue + 1)}>+</button>;
};

export default Button;
