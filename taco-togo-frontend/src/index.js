import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Welcome from "./components/Welcome";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
 
    <BrowserRouter>
      <Route path="/signupform" component={SignUpForm} />
      <Route path="/login" component={Login} />
      <Route path="/menu" component={App} />
      <Route path="/" exact component={Welcome} />
    </BrowserRouter>,
  
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
