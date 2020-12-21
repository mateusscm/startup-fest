import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/index";

export default function MainRoutes({ routes }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/startups")
      .then(async (res) => {
        setData(res.data["startups"]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {loading && <Loading />}
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={(props) => {
              return <route.component {...props} routes={routes} data={data} />;
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
