import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TermDetail from "./components/TermDetail"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header"
import CategoryList from "./components/CategoryList";


const routing = ( 
  <Router>
    <React.StrictMode>
      <Header></Header>
      <CategoryList> 
        </CategoryList> 
      <Switch>
        <Route exact path="/home" component={App}/> 
        <Route exact path="/termdetail/:term" component={TermDetail}/> 
      </Switch>
    </React.StrictMode>
  </Router> 
)
ReactDOM.render(routing, document.getElementById('root'));
