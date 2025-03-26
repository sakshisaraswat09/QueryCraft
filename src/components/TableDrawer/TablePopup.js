import React from "react";
import TableUI from "../TableUI";
import "./TablePopup.css"; 

function TablePopup({ trigger, setTrigger, rows, headers }) {
  return (
    trigger && (
      <div className="popup-overlay">
        <div className="popup-container">
          <button onClick={() => setTrigger(false)} className="close-button">
            X
          </button>
          <TableUI headers={headers} rows={rows} />
        </div>
      </div>
    )
  );
}

export default TablePopup;
