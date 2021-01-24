import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// Components
import Header from "./components/Header";

// Pages
import CountryIndex from "./pages/CountryIndex";
import CountryDetails from "./pages/CountryDetails";

const THEME_DARK = "dark";
const THEME_LIGHT = "light";

function App() {
  const [theme, setTheme] = useState(THEME_LIGHT);

  function switchTheme() {
    setTheme(theme === "light" ? THEME_DARK : THEME_LIGHT);
  }

  return (
    <div className={`App theme-${theme}`}>
      <Header themeName={theme === THEME_DARK ? "Light" : "Dark"} switchTheme={switchTheme} />
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
