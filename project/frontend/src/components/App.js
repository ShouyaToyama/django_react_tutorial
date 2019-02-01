import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/table">TableView</Link></li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/table" component={TableView} />
    </div>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
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