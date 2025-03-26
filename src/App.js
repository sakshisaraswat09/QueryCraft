import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Buttons from "./components/Buttons";
import PredefinedQuery from "./components/PredefinedQuery";
import SqlEditor from "./components/SqlEditor";
import Table from "./components/Table";
import DataDraw from "./components/TableDrawer/DataDraw";
import "./style.css";

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [showQueries, setShowQueries] = useState(false);
  const [showTables, setShowTables] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue(
      "-- Online SQL Editor to Run SQL Online. \n-- Use the editor to view all tables in SQL operations.\n\n-- Remove the code and Start exploring!\n\n-- Happy Coding!"
    );
  }

  useEffect(() => {
    if (value.toLowerCase() === "select * from employees;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from projects;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from departments;") {
      setDefaults(3);
    } else if (value.toLowerCase() === "select * from customers;") {
      setDefaults(4);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(5);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(6);
    } else if (value.toLowerCase() === "select * from select_customer;") {
      setDefaults(7);
    } else {
      setDefaults(0);
    }
  }, [value]);

  return (
    <div className="container">
      <div className="main-content">
        <div className="header">
          <h1 className="app-title">QueryCraft</h1>
        </div>

        <div className="editor-section">
          <div className="input-header">
            <div className="input-label">Input</div>
            <Buttons
              setQuery={setQuery}
              setHeaders={setHeaders}
              setRows={setRows}
              setCSVData={setCSVData}
              value={value}
              setValue={setValue}
              setDefaults={setDefaults}
              defaults={defaults}
            />
          </div>
          <SqlEditor value={value} setValue={setValue} />
        </div>

        <Table query={query} headers={headers} rows={rows} csvData={csvData} />
      </div>

      <div className="sidebar">
        <button className="theme-button" onClick={() => setIsDark(!isDark)}>
          {isDark ? "Light Theme 🌞" : "Dark Theme 🌙"}
        </button>

        <button
          className="sidebar-button"
          onClick={() => setShowQueries(!showQueries)}
        >
          Available Queries
          <span>{showQueries ? "▼" : "▶"}</span>
        </button>
        {showQueries && (
          <div className="sidebar-content">
            <PredefinedQuery setValue={setValue} setDefaults={setDefaults} />
          </div>
        )}

        <button
          className="sidebar-button"
          onClick={() => setShowTables(!showTables)}
        >
          Tables
          <span>{showTables ? "▼" : "▶"}</span>
        </button>
        {showTables && (
          <div className="sidebar-content">
            <DataDraw />
          </div>
        )}
      </div>

      <Toaster
        position="bottom-left"
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: isDark ? "#2d2d2d" : "#fff",
            color: isDark ? "#fff" : "#111827",
          },
        }}
      />
    </div>
  );
}

export default App;
