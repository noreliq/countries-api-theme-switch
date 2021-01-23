import React, { useState } from "react";
import "./App.scss";

import CountryIndex from "./pages/CountryIndex";
import CountryDetails from "./pages/CountryDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={`App theme-${theme}`}>
      <Header theme={theme} switchTheme={switchTheme} />
      <Router>
        <Switch>
          <Route exact path="/">
            <CountryIndex />
          </Route>
          <Route path="/:country">
            <CountryDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
