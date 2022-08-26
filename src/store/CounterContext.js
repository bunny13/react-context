import { createContext, useState } from "react";

const CounterContext = createContext({
    counter: 0,
    increment: () => {},
    decrementCounter: () => {},
    resetCounter: () => {}
});

export function CounterContextProvider(props) {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        console.log("here");
        setCounter((prevCounter) => prevCounter + 1);
    }

    function decrementCounter() {
        setCounter((prevCounter) => prevCounter - 1);
    }

    function resetCounter() {
        setCounter(0);
    }

    const context = {
        counter,
        increment: incrementCounter,
        decrementCounter,
        resetCounter
    };

    return (<CounterContext.Provider value={context}>
        {props.children}
    </CounterContext.Provider>);

}

export default CounterContext;
