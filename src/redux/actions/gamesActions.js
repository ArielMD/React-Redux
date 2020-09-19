import {
  AGREGAR_JUEGO,
  AGREGAR_JUEGO_ERROR,
  AGREGAR_JUEGO_EXITO,
} from "../../types/index";

export const crearNuevoJuego = (juego) => {
  return (distpach) => {
    distpach({
      type: AGREGAR_JUEGO,
    });

    try {
      distpach(agregarJuegoExito(juego));
    } catch (error) {
      console.log(error);
      distpach(agregarJuegoError(true));
    }
  };
};

// const agregarJuego = () => ({
//   type: AGREGAR_JUEGO,
// });

const agregarJuegoExito = (juego) => ({
  type: AGREGAR_JUEGO_EXITO,
  payload: juego,
});

const agregarJuegoError = () => ({
  type: AGREGAR_JUEGO_ERROR,
});
