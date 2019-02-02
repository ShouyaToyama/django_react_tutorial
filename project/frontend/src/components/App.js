import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";

const App = () => (
  <HashRouter hashType="noslash">
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/table'>Table</Link></li>
    </ul>

    <Route path='/' component={Home} />
    <Route exact path='/table' component={TableView} />
  </div>
  </HashRouter>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
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