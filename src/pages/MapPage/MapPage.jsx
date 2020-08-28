import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";
import Table from "../../components/Table/Table";
import { fetchCountriesData } from "../../api/";
import { sortData } from "../../util/util";
import Map from "../../components/Map/Map";
import mapPageStyles from "./MapPage.module.css";

const MapPage = () => {
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType] = useState("cases");
  const [mapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom] = useState(2);

  useEffect(() => {
    const getCountriesData = async () => {
      const dataSet = await fetchCountriesData();
      let sortedData = sortData(dataSet);
      setMapCountries(dataSet);
      setTableData(sortedData);
    };
    getCountriesData();
  }, []);

  return (
    <div className={mapPageStyles.app}>
      <div className={mapPageStyles.header}>
        <h1>GLOBAL MAP VIEW</h1>
      </div>
      <div className={mapPageStyles.content}>
        <div className={mapPageStyles.left}>
          <Map
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
        <Card className={mapPageStyles.right}>
          <CardContent>
            <div className={mapPageStyles.information}>
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
