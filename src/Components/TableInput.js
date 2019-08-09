import React, { Component } from "react";

const styles = {
  tableData: {
    flex: 1,
    textAlign: "left",
  },
};

class TableInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      city,
      country,
      allBuildings,
      heightx,
      heighty,
      heightz,
      heightm,
      telecomTowers,
      allStructures,
    } = this.props;
    return (
      <>
        <tr
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <td style={styles.tableData}>{city}</td>
          <td style={styles.tableData}>{country}</td>
          <td style={styles.tableData}>{allBuildings}</td>
          <td style={styles.tableData}>{heightx}</td>
          <td style={styles.tableData}>{heighty}</td>
          <td style={styles.tableData}>{heightz}</td>
          <td style={styles.tableData}>{heightm}</td>
          <td style={styles.tableData}>{telecomTowers}</td>
          <td style={styles.tableData}>{allStructures}</td>
        </tr>
      </>
    );
  }
}

export default TableInput;
