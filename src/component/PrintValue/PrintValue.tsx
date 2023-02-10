import { useContext } from "react";
import { MyContext } from "../../store/contexts/demo-context.context";

const PrintValue = () => {
  const { currentValue } = useContext(MyContext);
  return <p>{currentValue}</p>;
};

export default PrintValue;
