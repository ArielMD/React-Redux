import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  seleccionarJuego,
  obtenerJuegos,
  editarJuego,
} from "../redux/actions/gamesActions";

const EditarJuego = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { juegoEditar } = useSelector((state) => state.games);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    dispatch(obtenerJuegos());
    dispatch(seleccionarJuego(Number(id)));
    if (juegoEditar && nombre === "" && precio === 0) {
      setNombre(juegoEditar.nombre);
      setPrecio(juegoEditar.precio);
    }

    return () => dispatch(seleccionarJuego(null));
  }, [juegoEditar]);

  const handleGuardar = (e) => {
    e.preventDefault();
    const juego = {
      nombre,
      precio,
      id: Number(id),
    };
    console.log(juego);
    dispatch(editarJuego(juego));
  };

  if (!juegoEditar) return <h1>Error</h1>;

  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar juego</h2>
            <form onSubmit={handleGuardar}>
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
                  type="number"
                  className="form-control"
                  placeholder="ingrese el precio del juego"
                  name="precio"
                  value={precio}
                  onChange={(e) => setPrecio(Number(e.target.value))}
                ></input>
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase w-100"
              >
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarJuego;
