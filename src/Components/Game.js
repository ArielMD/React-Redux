import React from "react";
import PropTypes from "prop-types";

const Game = ({ id, nombre, precio }) => {
  return (
    <tr key={id}>
      <th>{id}</th>
      <th>{nombre}</th>
      <th>{precio}</th>
      <th>
        <button className="btn btn-warning mr-2">Editar</button>
        <button className="btn btn-danger">Eliminar</button>
      </th>
    </tr>
  );
};

Game.propTypes = {
  id: PropTypes.number,
  precio: PropTypes.number,
  nombre: PropTypes.string,
};
export default Game;
