import React, { Component, Fragment } from "react";
import TableInput from "../Components/TableInput";
import { arkeraData, arkeraDataHeaders } from "../Services/localServerData";

const styles = {
  table: {
    border: "solid 2px black",
    padding: 20,
    margin: 20,
    display: "flex",
    flexDirection: "column",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  },
  tableRow: {
    display: "flex",
  },
  tableHeader: {
    textAlign: "left",
    flex: 1,
    borderBottom: "solid 2px gray",
    padding: 5,
    marginBottom: 10,
  },
};

export default class RootContainer extends Component {
  handleFilter = data => {
    const orderParam = window.location.pathname.split("/").pop();
    if (orderParam.length > 0) {
      try {
        data.sort((a, b) => {
          return a[orderParam].localeCompare(b[orderParam], undefined, {
            numeric: !["City", "Country"].includes(orderParam),
          });
        });
        return data;
      } catch (err) {
        console.log("URL Error:", err);
        return data;
      }
    } else {
      return data;
    }
  };

  render() {
    return (
      <div>
        <h2>List of Cities</h2>
        <p>Use the URL to order columns</p>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.tableRow}>
              {arkeraDataHeaders.map((element, i) => (
                <Fragment key={i}>
                  <th style={styles.tableHeader}>
                    {element}
                  </th>
                </Fragment>
              ))}
            </tr>
            {this.handleFilter(arkeraData).map((element, i) => (
              <Fragment key={i}>
                <TableInput
                  key={i}
                  city={element.City}
                  country={element.Country}
                  allBuildings={element.AllBuildings}
                  heightx={element["100m+"]}
                  heighty={element["150m+"]}
                  heightz={element["200m+"]}
                  heightm={element["300m+"]}
                  telecomTowers={element.TelecomTowers}
                  allStructures={element.AllStructures}
                />
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
