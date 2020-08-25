import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";

import HomePage from "./pages/HomePage/HomePage.jsx";
import MapPage from "./pages/MapPage/MapPage.jsx";

import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map" component={MapPage} />
      </Switch>
    </div>
  );
};

export default App;
