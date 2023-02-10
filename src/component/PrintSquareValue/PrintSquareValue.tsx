import { useContext } from "react";
import { MyContext } from "../../store/contexts/demo-context.context";

const PrintSquareValue = () => {
  const { currentValue } = useContext(MyContext);
  return <p>{Math.pow(currentValue, 2)}</p>;
};

export default PrintSquareValue;
