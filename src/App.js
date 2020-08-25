import React from "react";

import { Cards, CountryOptions, Chart, Header } from "./components";
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
    console.log(data);
    return (
      <div className={styles.container}>
        <Header />
        <h1 className={styles.container__title}>CORONAVIRUS TRACKER</h1>
        <Cards data={data} />
        <CountryOptions handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
