import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/home";
import "./App.css";
import DefectivePolicies from "./Screens/Interviews/DefectivePolicies";
import Visionary from "./Screens/Interviews/visionary";
import Taskfinance from "./Screens/Interviews/Taskfinance";
import Industrialist from "./Screens/Interviews/Industrialist";
import interbond from "./Screens/Interviews/Interbond";
import Interim from "./Screens/Interviews/Interim";
import Scrambles from "./Screens/Interviews/Scrambles";
import Reaping from "./Screens/Interviews/Reaping";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/defective" component={DefectivePolicies} />
        <Route exact path="/visionary" component={Visionary} />
        <Route exact path="/taskfinance" component={Taskfinance} />
        <Route exact path="/industrialist" component={Industrialist} />
        <Route exact path="/interbond" component={interbond} />
        <Route exact path="/interim" component={Interim} />
        <Route exact path="/scrambles" component={Scrambles} />
        <Route exact path="/reaping" component={Reaping} />
      </Switch>
    </div>
  );
}

export default App;
