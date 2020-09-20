import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { eliminarJuego } from "../redux/actions/gamesActions";
import Swal from "sweetalert2";

const Game = ({ id, nombre, precio }) => {
  const dispatch = useDispatch();

  const eliminar = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esta accion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(eliminarJuego(id));
      }
    });
  };

  return (
    <tr key={id}>
      <th>{id}</th>
      <th>{nombre}</th>
      <th>{precio}</th>
      <th>
        <Link to={`/Juegos/editar/${id}`} className="btn btn-warning mr-2">
          Editar
        </Link>
        <button className="btn btn-danger" onClick={() => eliminar(id)}>
          Eliminar
        </button>
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
