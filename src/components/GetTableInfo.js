import employees from "./DataStore/employees.json";
import projects from "./DataStore/projects.json";
import departments from "./DataStore/departments.json";
import customers from "./DataStore/customers.json";
import suppliers from "./DataStore/suppliers.json";
import products from "./DataStore/products.json";
import selectCustomer from "./DataStore/select_customer.json";
import "./GetTableInfo.css";

const dataSources = {
  1: employees,
  2: projects,
  3: departments,
  4: customers,
  5: suppliers,
  6: products,
  7: selectCustomer,
};

export default function GetTableInfo(data) {
  const infoStore = dataSources[data] || [];

  if (infoStore.length === 0) {
    return { tableHeaders: [], tableRows: [] };
  }

  // Get headers from the first row
  const tableHeaders = Object.values(infoStore[0]);

  // Get all other rows as data
  const tableRows = infoStore.slice(1).map((row) => {
    return Object.values(row);
  });

  return { tableHeaders, tableRows };
}
