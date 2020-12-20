import React from "react";
import { Switch, Route } from "react-router-dom";

export default function MainRoutes({ routes }) {
  return (
    <main>
      <Switch>
        {routes.map((route) => (
          <Route
            key={Math.random()}
            exact={route.exact}
            path={route.path}
            render={(props) => {
              return <route.component {...props} routes={routes} />;
            }}
          />
        ))}
        <Route>
          <h1>Nada foi encontrado</h1>
        </Route>
      </Switch>
    </main>
  );
}
