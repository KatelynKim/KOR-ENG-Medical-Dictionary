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
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
} from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import history from "./components/history";

const middleware = [thunk, routerMiddleware(history)];

// let store = createStore(
//   connectRouter(history)(allReducers),
//   applyMiddleware(routerMiddleware(history), thunk)
// );

let store = createStore(allReducers, applyMiddleware(...middleware));
const routing = (
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}

    <Router history={history}>
      <div>
        <Header></Header>
        <CategoryList></CategoryList>
        <Switch>
          <Route exact path="/home" component={App} />
          <Route path="/termdetail/:term" component={TermDetail} />
        </Switch>
      </div>
    </Router>
    {/* </ConnectedRouter> */}
  </Provider>
  // <Router>
  //   <React.StrictMode>
  //     <Header></Header>
  //     <CategoryList></CategoryList>
  //     <Switch>
  //       <Provider store={store}>
  //         <Route exact path="/home" component={App} />
  //       </Provider>
  //       <Route exact path="/termdetail/:term" to={TermDetail} />
  //     </Switch>
  //   </React.StrictMode>
  // </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
