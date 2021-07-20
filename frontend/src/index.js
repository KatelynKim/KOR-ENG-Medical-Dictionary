import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Router as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/allReducers";
import thunk from "redux-thunk";
import TermDetail from "./components/TermDetail";
import { 
  routerMiddleware,
} from "connected-react-router"; 
import history from "./components/history"; 
import CategoryPage from "./components/CategoryPage"

const middleware = [thunk, routerMiddleware(history)];
 

let store = createStore(allReducers, applyMiddleware(...middleware));
const routing = (
  <Provider store={store}> 
    <Router history={history}> 
        <Header></Header>
        <CategoryList></CategoryList>
        <Switch>
          <Route exact path="/home" component={App} />
          <Route path="/termdetail/:term" component={TermDetail} /> 
          <Route path="/categories" component={CategoryPage} /> 
        </Switch> 
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));
