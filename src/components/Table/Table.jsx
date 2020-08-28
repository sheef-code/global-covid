import React from "react";
import styles from "./Table.module.css";
import numeral from "numeral";

function Table({ countries }) {
  let id = 1;
  return (
    <table className={styles.table}>
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
  );
}

export default Table;
