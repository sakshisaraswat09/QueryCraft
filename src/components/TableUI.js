import React from "react";
import "./TableUI.css";

function TableUI({ headers, rows }) {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row_value, index) => (
              <tr key={index}>
                {row_value.map((cell_value, cellIndex) => (
                  <td key={cellIndex}>{cell_value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableUI;
