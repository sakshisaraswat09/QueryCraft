import React from "react";

function DataDraw() {
  const tables = {
    employees: [
      { name: "Employee ID", type: "varchar(40)" },
      { name: "First Name", type: "varchar(40)" },
      { name: "Last Name", type: "varchar(40)" },
      { name: "Email", type: "varchar(40)" },
      { name: "Department", type: "varchar(40)" },
      { name: "Position", type: "varchar(40)" },
      { name: "Salary", type: "decimal(10,2)" },
      { name: "Hire Date", type: "date" },
    ],
    projects: [
      { name: "Project ID", type: "varchar(40)" },
      { name: "Project Name", type: "varchar(40)" },
      { name: "Start Date", type: "date" },
      { name: "End Date", type: "date" },
      { name: "Status", type: "varchar(40)" },
      { name: "Budget", type: "decimal(10,2)" },
      { name: "Manager ID", type: "varchar(40)" },
      { name: "Description", type: "text" },
    ],
    departments: [
      { name: "Department ID", type: "varchar(40)" },
      { name: "Department Name", type: "varchar(40)" },
      { name: "Location", type: "varchar(40)" },
      { name: "Head Count", type: "int" },
      { name: "Budget", type: "decimal(10,2)" },
      { name: "Manager ID", type: "varchar(40)" },
    ],
    customers: [
      { name: "Customer ID", type: "varchar(40)" },
      { name: "Company Name", type: "varchar(40)" },
      { name: "Contact Name", type: "varchar(40)" },
      { name: "Contact Title", type: "varchar(40)" },
      { name: "Address", type: "varchar(40)" },
      { name: "City", type: "varchar(40)" },
      { name: "Region", type: "varchar(40)" },
      { name: "Postal Code", type: "varchar(40)" },
      { name: "Country", type: "varchar(40)" },
      { name: "Phone Number", type: "varchar(40)" },
      { name: "Fax", type: "varchar(40)" },
    ],
    suppliers: [
      { name: "Supplier ID", type: "varchar(40)" },
      { name: "Company Name", type: "varchar(40)" },
      { name: "Contact Name", type: "varchar(40)" },
      { name: "Contact Title", type: "varchar(40)" },
      { name: "Address", type: "varchar(40)" },
      { name: "City", type: "varchar(40)" },
      { name: "Region", type: "varchar(40)" },
      { name: "Postal Code", type: "varchar(40)" },
      { name: "Country", type: "varchar(40)" },
      { name: "Phone", type: "varchar(40)" },
      { name: "Fax", type: "varchar(40)" },
      { name: "Homepage", type: "varchar(40)" },
    ],
    products: [
      { name: "Product ID", type: "varchar(40)" },
      { name: "Product Name", type: "varchar(40)" },
      { name: "Supplier ID", type: "varchar(40)" },
      { name: "Category ID", type: "varchar(40)" },
      { name: "Quantity Per Unit", type: "varchar(40)" },
      { name: "Unit Price", type: "decimal(10,2)" },
      { name: "Units In Stock", type: "int" },
      { name: "Units On Order", type: "int" },
      { name: "Reorder Level", type: "int" },
      { name: "Discontinued", type: "boolean" },
    ],
    select_customer: [
      { name: "Customer ID", type: "varchar(40)" },
      { name: "Company Name", type: "varchar(40)" },
      { name: "Contact Name", type: "varchar(40)" },
      { name: "Contact Title", type: "varchar(40)" },
      { name: "Address", type: "varchar(40)" },
      { name: "City", type: "varchar(40)" },
      { name: "Region", type: "varchar(40)" },
      { name: "Postal Code", type: "varchar(40)" },
      { name: "Country", type: "varchar(40)" },
      { name: "Phone Number", type: "varchar(40)" },
      { name: "Fax", type: "varchar(40)" },
    ],
  };

  return (
    <div>
      {Object.entries(tables).map(([tableName, columns]) => (
        <div key={tableName} className="table-structure">
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            {tableName} [-]
          </div>
          {columns.map((column, index) => (
            <div key={index} className="table-structure-item">
              <div className="table-structure-line"></div>
              <div className="table-structure-name">
                {column.name}
                <span className="table-structure-type">[{column.type}]</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DataDraw;
