import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerJuegos } from "../redux/actions/gamesActions";
import Game from "./Game";

const Juegos = () => {
  const { games, loading, error } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerJuegos());
  }, []);

  return (
    <React.Fragment>
      <h2 className="text-center my-5">Lista de juegos</h2>
      {error ? <div className="alert alert-danger">Hubo un error</div> : null}
      {loading ? (
        <div className="alert alert-warning text-center">Cargando...</div>
      ) : null}
      <table className="table">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Actiones</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, id) => {
            return (
              <Game
                key={id}
                id={id}
                nombre={game.nombre}
                precio={game.precio}
              />
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Juegos;
