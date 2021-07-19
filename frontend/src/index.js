import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TermDetail from "./components/TermDetail";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/allReducers"
import thunk from "redux-thunk";

let store = createStore(allReducers, applyMiddleware(thunk));

// store.subscribe(() => console.log(store.getState()));

const routing = (
  <Router>
    <React.StrictMode>
      <Header></Header>
      <CategoryList></CategoryList>
      <Switch>
        <Provider store={store}>
          <Route exact path="/home" component={App} />
        </Provider>
        <Route exact path="/termdetail/:term" component={TermDetail} />
      </Switch>
    </React.StrictMode>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
