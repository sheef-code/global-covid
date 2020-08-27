import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Footer } from "./components";

import HomePage from "./pages/HomePage/HomePage.jsx";
import MapPage from "./pages/MapPage/MapPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map" component={MapPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
