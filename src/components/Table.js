import React from "react";
import { CSVLink } from "react-csv";
import TableUI from "./TableUI";
import "./Table.css";

function Table({ query, headers, rows, csvData }) {
  return (
    <div>
      {query ? (
        <section className="table-container">
          <div className="table-header">
            <div className="output-label">Output</div>
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="csv-link"
            >
              <button className="export-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 40.496 36"
                  className="export-icon"
                >
                  <path
                    id="Icon_awesome-file-export"
                    d="M27,8.571a1.682,1.682,0,0,0-.492-1.188L19.624.492A1.686,1.686,0,0,0,18.429,0H18V9h9ZM40.148,21.656,33.42,14.878a1.128,1.128,0,0,0-1.927.795V20.25h-4.5v4.5h4.5v4.584a1.128,1.128,0,0,0,1.927.795l6.729-6.785A1.2,1.2,0,0,0,40.148,21.656ZM13.5,23.625v-2.25a1.128,1.128,0,0,1,1.125-1.125H27v-9H17.438A1.692,1.692,0,0,1,15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V24.75H14.625A1.128,1.128,0,0,1,13.5,23.625Z"
                  />
                </svg>
                <span className="export-text">Export CSV</span>
              </button>
            </CSVLink>
          </div>
          <TableUI headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="no-output">
          Run Something & Your Output Shall Appear!
        </div>
      )}
    </div>
  );
}

export default Table;
