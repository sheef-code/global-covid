import React, { useState, useEffect } from "react";
import { Cards, CountryOptions, Chart } from "../../components";
import { fetchData } from "../../api/";

import homeStyles from "./HomePage.module.css";

const HomePage = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      const dataSet = await fetchData();
      setData(dataSet);
    };
    getData();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <>
      <h1 className={homeStyles.title}>CORONAVIRUS TRACKER</h1>
      <Cards data={data} />
      <CountryOptions handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </>
  );
};

export default HomePage;
