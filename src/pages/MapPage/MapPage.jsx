import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";
import styles from "./MapPage.module.css";

import Table from "../../components/Table/Table";
import { sortData } from "../../util/util";
import Map from "../../components/Map/Map";

const MapPage = () => {
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType] = useState("cases");
  const [mapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom] = useState(3);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          let sortedData = sortData(data);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>GLOBAL MAP VIEW</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.app__left}>
          <Map
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
        <Card className={styles.app__right}>
          <CardContent>
            <div className={styles.app__information}>
              <h3>Most Cases By Country</h3>
              <Table countries={tableData} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MapPage;
