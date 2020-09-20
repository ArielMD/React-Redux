import {
  AGREGAR_JUEGO,
  AGREGAR_JUEGO_ERROR,
  AGREGAR_JUEGO_EXITO,
  OBTENER_JUEGOS_ERROR,
  OBTENER_JUEGOS_EXITO,
} from "../../types/index";

import Swal from "sweetalert2";

const games = [
  { nombre: "Halo", precio: 2000 },
  { nombre: "Halo 2", precio: 2000 },
  { nombre: "Halo 3", precio: 2000 },
  { nombre: "Halo 4", precio: 2000 },
];

export const crearNuevoJuego = (juego) => {
  return (distpach) => {
    distpach({
      type: AGREGAR_JUEGO,
    });
    try {
      distpach({
        type: AGREGAR_JUEGO_EXITO,
        payload: juego,
      });

      Swal.fire("Correcto", "El juego se agrego correctamente", "success");
    } catch (error) {
      distpach({
        type: AGREGAR_JUEGO_ERROR,
        payload: true,
      });

      Swal.fire({
        icon: "error",
        tittle: "Hubo un error",
        text: "No se ha podido guargar el juego, intentalo de nuevo",
      });
    }
  };
};

export const obtenerJuegos = () => {
  return (distpach) => {
    try {
      distpach({
        type: OBTENER_JUEGOS_EXITO,
        payload: games,
      });
    } catch (error) {
      distpach({
        type: OBTENER_JUEGOS_ERROR,
        payload: true,
      });
    }
  };
};
