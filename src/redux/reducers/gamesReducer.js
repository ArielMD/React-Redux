import {
  AGREGAR_JUEGO,
  AGREGAR_JUEGO_ERROR,
  AGREGAR_JUEGO_EXITO,
  OBTENER_JUEGOS_ERROR,
  OBTENER_JUEGOS_EXITO,
  OBTENER_JUEGOS,
  ELIMINAR_JUEGO_ERROR,
  ELIMINAR_JUEGO_EXITO,
} from "../../types/index";

const initialState = {
  games: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_JUEGOS:
    case AGREGAR_JUEGO:
      return {
        ...state,
        loading: true,
      };

    case AGREGAR_JUEGO_EXITO:
      return {
        ...state,
        loading: false,
        games: [...state.games, action.payload],
      };
    case ELIMINAR_JUEGO_ERROR:
    case OBTENER_JUEGOS_ERROR:
    case AGREGAR_JUEGO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_JUEGOS_EXITO:
      if (state.games.length === 0) {
        return {
          ...state,
          loading: false,
          games: action.payload,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }

    case ELIMINAR_JUEGO_EXITO:
      return {
        ...state,
        games: state.games.filter((game, index) => index !== action.payload),
      };
    default:
      return state;
  }
}
