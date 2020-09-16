import React from "react";

const NuevoJuego = () => {
  return (
    <div className="row justify-content-center my-5">
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar un nuevo juego
            </h2>
            <form>
              <div className="form-group">
                <label>Nombre del juego</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese el nombre del producto"
                  name="nombre"
                ></input>
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ingrese el precio del juego"
                  name="nombre"
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

export default NuevoJuego;
