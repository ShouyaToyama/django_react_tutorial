import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import Item from "./Item";

const App = () => (
  <HashRouter hashType="noslash">
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/table'>Table</Link></li>
    </ul>

    <Route exact path='/' component={Home} />
    <Route path='/table' component={TableView} />
  </div>
  </HashRouter>
);

const Home = () => (
  <React.Fragment>
    <DataProvider endpoint="api/lead/"
                  render={data => <Item data={data} />} />
  </React.Fragment>
)

const TableView = () => (
  <React.Fragment>
    <DataProvider endpoint="api/lead/"
                  render={data => <Table data={data} />} />
    <Form endpoint="api/lead/" />
  </React.Fragment>
)

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;