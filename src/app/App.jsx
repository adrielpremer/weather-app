import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import "./Icons";
import { ContextProvider } from "./ContextProvider";

import { Navigation, Link } from "./components/navigation/Navigation";
import { WeatherPage } from "./pages/WeatherPage";
import { About } from "./pages/About";

export const App = () => (
  <Router>
    <ContextProvider>
      <Navigation>
        <Link to="" exact>
          Weather
        </Link>
        <Link to="/About">About</Link>
      </Navigation>
      <div className={styles.app}>
        <Route exact path="/" component={WeatherPage} />
        <Route path="/about" component={About} />
      </div>
    </ContextProvider>
  </Router>
);

export default App;
