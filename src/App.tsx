import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "@/routes";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          <Switch>
            {routes.map((menu) => (
              <Route
                key={menu.key}
                path={menu.key}
                component={menu.component}
              />
            ))}
            <Redirect exact to="/login" from="/" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
