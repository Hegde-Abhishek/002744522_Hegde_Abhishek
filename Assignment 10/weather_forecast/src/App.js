import React from "react";
import "./App.css";
import Hourly from "./Hourly";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherForecast from "./WeatherForecast";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={WeatherForecast} />
            <Route path="/hourlyForecast/:day" component={Hourly} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
