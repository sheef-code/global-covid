import React from "react";

import { Cards, CountryOptions, Chart, Information } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Information />
        <h1>GLOBAL COVID-19 INFORMATION</h1>
        <Cards data={data} />
        <CountryOptions handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
