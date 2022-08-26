import { useContext } from "react";
import CounterContext from '../../store/CounterContext';

function Nav1() {
  const counterCtx = useContext(CounterContext);
  return (
      <div>
        <button onClick={counterCtx.increment}>Increment</button>
        <button onClick={counterCtx.decrementCounter}>Decrement</button>
        <button onClick={counterCtx.resetCounter}>Reset</button>
      </div>
  );
}

export default Nav1;
