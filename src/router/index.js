import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Comments from "../pages/index"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const history = useHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Comments} />
      </Switch>
    </Router>
  );
};
