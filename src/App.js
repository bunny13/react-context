import { Switch, Route, Link, Redirect } from "react-router-dom";
import Todo from "./components/Todo";
import "./App.css";
import Nav1 from "./components/pages/Nav1";
import Nav2 from "./components/pages/Nav2";
import MainNavigation from "./components/layout/MainNavigation";
import { CounterContextProvider } from "./store/CounterContext";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Todo />
        </Route>
        <Route path="/nav1">
          <CounterContextProvider>
            <Nav1 />
          </CounterContextProvider>
        </Route>
        <Route path="/nav2">
          <CounterContextProvider>
            <Nav2 />
          </CounterContextProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
