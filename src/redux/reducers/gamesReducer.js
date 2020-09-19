import {
  AGREGAR_JUEGO,
  AGREGAR_JUEGO_ERROR,
  AGREGAR_JUEGO_EXITO,
} from "../../types/index";

const initialState = {
  games: [],
  error: null,
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

    case AGREGAR_JUEGO_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
