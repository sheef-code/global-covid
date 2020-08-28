import React from "react";
import styles from "./Table.module.css";
import numeral from "numeral";

function Table({ countries }) {
  let id = 1;
  return (
    <div className={styles.table}>
      <table style={{ width: "100%" }}>
        <tbody>
          {countries.map((country) => (
            <tr key={id}>
              <td>{id++}</td>
              <td>{country.country}</td>
              <td>
                <strong>{numeral(country.cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
