import {
  AGREGAR_JUEGO,
  AGREGAR_JUEGO_ERROR,
  AGREGAR_JUEGO_EXITO,
  OBTENER_JUEGOS_ERROR,
  OBTENER_JUEGOS_EXITO,
  OBTENER_JUEGOS,
  ELIMINAR_JUEGO_ERROR,
  ELIMINAR_JUEGO_EXITO,
  OBTENER_JUEGO_EDITAR,
  EDITAR_JUEGO_ERROR,
  EDITAR_JUEGO_EXITO,
} from "../../types/index";

const initialState = {
  games: [],
  error: false,
  loading: false,
  juegoEditar: null,
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
    case EDITAR_JUEGO_ERROR:
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

    case OBTENER_JUEGO_EDITAR: {
      const editGame = state.games.filter(
        (game, index) => index === action.payload
      );
      if (editGame.length === 0) {
        return {
          ...state,
          juegoEditar: null,
        };
      } else {
        return {
          ...state,
          juegoEditar: editGame[0],
        };
      }
    }

    case EDITAR_JUEGO_EXITO:
      console.log(action.payload.id);
      return {
        ...state,
        games: state.games.map((game, id) =>
          id === action.payload.id ? action.payload : game
        ),
      };
    default:
      return state;
  }
}
