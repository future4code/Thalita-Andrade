import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ApprovedListPage from "../ApprovedListPage";
import CreateTripPage from "../CreateTripPage";
import TripDetailsPage from "../TripDetailsPage";
import AdminPage from "../AdminPage";
import HomePage from "../HomePage";
import ListTripsPage from "../ListTripsPage";
import RegistrationUserPage from "../RegistrationUserPage";

const routes = {
  root: "/",
  login: "/login",
  registrationUserPage: "/registration/user",
  adminPage: "/admin",
  createTripPage: "/create/trip",
  listTripPage: "/list/trip",
  approvedListPage: "/approved/list",
  tripDetailsPage: "/trip/details",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.registrationUserPage} component={RegistrationUserPage} />
        <Route path={routes.adminPage} component={AdminPage} /> 
        <Route path={routes.createTripPage} component={CreateTripPage} /> 
        <Route path={routes.listTripPage} component={ListTripsPage} /> 
        <Route path={routes.approvedListPage} component={ApprovedListPage} /> 
        <Route path={routes.tripDetailsPage} component={TripDetailsPage} />
        <Route path={routes.root} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
