import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import ItemList, {ItemView} from "./Item";
import SidebarExampleVisible from "./Sidebar";
import { Container } from "semantic-ui-react";

const App = () => (
  <>
  {/* <SidebarExampleVisible /> */}
  <HashRouter hashType="noslash">
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/table'>Table</Link></li>
      <li><Link to='/table/999'>One</Link></li>
    </ul>

    <Route exact path='/' component={Home} />
    <Route exact path='/table' component={TableView} />
    <Route path='/table/:id' component={TableOne} />
  </div>
  </HashRouter>
  </>
);

const Home = () => (
  <Container>
    <DataProvider endpoint="api/lead/"
                  render={data => <ItemList data={data} />} />
  </Container>
)

const TableView = () => (
  <React.Fragment>
    <DataProvider endpoint="api/lead/"
                  render={data => <Table data={data} />} />
    <Form endpoint="api/lead/" />
  </React.Fragment>
)

const TableOne = props => {
  const { id } = props.match.params;

  return (
    <React.Fragment>
      <DataProvider endpoint={`api/lead/${id}/`}
                    render={data => <ItemView data={data} />} />
    </React.Fragment>
  )
}

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;