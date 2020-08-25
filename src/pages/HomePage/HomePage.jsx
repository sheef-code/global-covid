import React from "react";
import { Cards, CountryOptions, Chart } from "../../components";
import { fetchData } from "../../api/";

import styles from "./HomePage.module.css";

class HomePage extends React.Component {
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
      <>
        <h1 className={styles.title}>CORONAVIRUS TRACKER</h1>
        <Cards data={data} />
        <CountryOptions handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </>
    );
  }
}

export default HomePage;
