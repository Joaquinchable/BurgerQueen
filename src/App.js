import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Login from './auth/Login'
import SignUp from "./auth/Signup";
import Layout from "./Layout/Layout";
import Logout from "./auth/Logout";
import Breakfast from './Pages/BreakfastPage'
import LunchDinner from './Pages/LunchDinnerPage'
import { connect } from 'react-redux';


const App = ({loggedIn}) => {

  console.log(loggedIn);
  let routes;
if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/breakfast" component={Breakfast} />
        <Route exact path="/lunchdiner" component={LunchDinner} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/breakfast" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
});

export default connect(mapStateToProps)(App);
