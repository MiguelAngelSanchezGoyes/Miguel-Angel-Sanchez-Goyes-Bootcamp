import { Route, Switch } from "react-router-dom";
import { FilmPage } from "./components/films/films.page";
import { Layout } from "./components/core/layout";
import { FavPage } from "./components/fav/fav.page";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <FilmPage />
        </Route>
        <Route path="/fav">
          <FavPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
