import {
  AGREGAR_JUEGO,
  AGREGAR_JUEGO_ERROR,
  AGREGAR_JUEGO_EXITO,
  OBTENER_JUEGOS_ERROR,
  OBTENER_JUEGOS_EXITO,
} from "../../types/index";

const initialState = {
  games: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
        return state;
      }

    default:
      return state;
  }
}
