import React from "react";

const Juegos = () => {
  return (
    <React.Fragment>
      <h2 className="text-center my-5">Lista de juegos</h2>
      <table className="table">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </React.Fragment>
  );
};

export default Juegos;
