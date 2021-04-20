// import React, { Component, Fragment } from "react";
// import ReactDOM from "react-dom";
// import Header from "./layout/Header";
// import Home from "./listings/Home";

// import { Provider } from "react-redux";
// import store from "../store";

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Fragment>
//           <Header />
//           <div className="container">
//             <Home />
//           </div>
//         </Fragment>
//       </Provider>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById("app"));
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./listings/Dashboard";
import Home from "./listings/Home";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import Form from "./listings/Form";
// import MyListings from "./listings/MyListings";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentWillMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/form" component={Form} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
