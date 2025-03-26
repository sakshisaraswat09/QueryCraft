import React from "react";
import "./PredefinedQuery.css"; // Import CSS file

function PredefinedQuery({ setValue, setDefaults }) {
  const queryValue = [
    {
      query: "select * from employees;",
      defaults: 1,
    },
    {
      query: "select * from projects;",
      defaults: 2,
    },
    {
      query: "select * from departments;",
      defaults: 3,
    },
    {
      query: "select * from customers;",
      defaults: 4,
    },
    {
      query: "select * from suppliers;",
      defaults: 5,
    },
    {
      query: "select * from products;",
      defaults: 6,
    },
    {
      query: "select * from select_customer;",
      defaults: 7,
    },
  ];

  return (
    <div className="predefined-queries">
      {queryValue.map((item, index) => (
        <button
          key={index}
          className="query-button"
          onClick={() => {
            setValue(item.query);
            setDefaults(item.defaults);
          }}
        >
          {item.query}
        </button>
      ))}
    </div>
  );
}

export default PredefinedQuery;
