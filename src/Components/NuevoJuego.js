import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { crearNuevoJuego } from "../redux/actions/gamesActions";

const NuevoJuego = ({ history }) => {
  const [nombre, setNombre] = useState("");
  const [precio, serPrecio] = useState(0);

  const dispatch = useDispatch();

  const submitNuevoJuego = (e) => {
    e.preventDefault();

    const nuevoJuego = {
      nombre,
      precio,
    };
    dispatch(crearNuevoJuego(nuevoJuego));
  };

  return (
    <div className="row justify-content-center my-5">
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar un nuevo juego
            </h2>
            <form onSubmit={submitNuevoJuego}>
              <div className="form-group">
                <label>Nombre del juego</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese el nombre del producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ingrese el precio del juego"
                  name="precio"
                  value={precio}
                  onChange={(e) => serPrecio(Number(e.target.value))}
                ></input>
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

NuevoJuego.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NuevoJuego;
