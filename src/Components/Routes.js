import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthContainer from "../Routes/Auth/AuthContainer";
import Search from "../Routes/Search/SearchContainer";
import Profile from "../Routes/Profile/ProfileContainer";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import FullPost from "./Post/FullPost";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/users/:username" component={Profile} />
    <Route path="/posts/:id" component={FullPost} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={AuthContainer} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
