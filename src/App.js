import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Juegos from "./Components/Juegos";
import NuevoJuego from "./Components/NuevoJuego";
import EditarJuego from "./Components/EditarJuego";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Juegos}></Route>
          <Route exact path="/juegos/nuevo" component={NuevoJuego}></Route>
          <Route
            exact
            path="/Juegos/editar/:id"
            component={EditarJuego}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
