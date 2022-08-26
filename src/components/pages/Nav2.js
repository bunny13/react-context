import { useContext } from "react";
import CounterContext from "../../store/CounterContext";

function Nav2() {
  const counterCtx = useContext(CounterContext);
  return (
      <div>Display Counter: {counterCtx.counter}</div>
  );
}

export default Nav2;
