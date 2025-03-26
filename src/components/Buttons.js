import React from "react";
import toast from "react-hot-toast";
import getTableInfo from "./GetTableInfo";
import "./Buttons.css"; // Importing the CSS file

function Buttons({
  setCSVData,
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value,
}) {
  const runQuery = () => {
    setQuery(value);
    const { tableHeaders, tableRows } = getTableInfo(defaults);
    setHeaders(tableHeaders);
    setRows(tableRows);

    // Create CSV data with headers and rows
    const temp = [tableHeaders, ...tableRows];
    setCSVData(temp);

    if (temp.length > 0) {
      toast.success("Query executed successfully");
    } else {
      toast.error("No results found");
    }
  };

  const reset = () => {
    setQuery("");
    setValue("select * from employees;");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
  };

  return (
    <div className="button-container">
      <div className="button-wrapper">
        <button onClick={reset} className="button reset-button">
          <div className="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8z" />
            </svg>
          </div>
          <div className="button-text">Reset</div>
        </button>
      </div>
      <div className="button-wrapper">
        <button onClick={runQuery} className="button run-button">
          <div className="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="21"
              viewBox="0 0 31.499 36.001"
              className="fill-current"
            >
              <path
                id="Icon_awesome-play"
                data-name="Icon awesome-play"
                d="M29.841,15.1,5.091.464A3.356,3.356,0,0,0,0,3.368V32.625a3.372,3.372,0,0,0,5.091,2.9L29.841,20.9a3.372,3.372,0,0,0,0-5.808Z"
                transform="translate(0 -0.002)"
              />
            </svg>
          </div>
          <div className="button-text">Run Query</div>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
