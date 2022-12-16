import {
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  GETALLUSERS_SUCCESS,
  GETALLUSERS,
  GETALLUSERS_FAIL,
  DELETEUSER,
  UPDATEUSER,
  LOGIN_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  GET_PROFIL,
  GET_PROFIL_FAIL,
  GET_PROFIL_SUCCESS,
  LOGOUT,
  DETAILUSER,
} from "./actionTypes";

export const init = {
  oneUser: null,
  users: null,
  error: null,
  loading: false,
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGN_UP:
    case LOGIN:
    case GET_PROFIL:
    case GETALLUSERS:
      return {
        ...state,
        loading: true,
      };

    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
    case GET_PROFIL_SUCCESS:
      return {
        ...state,
        oneUser: payload,
        loading: false,
        error: null,
      };

    case DELETEUSER:
    case GETALLUSERS_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
        error: null,
      };

    case SIGN_UP_FAIL:
    case LOGIN_FAIL:
    case GET_PROFIL_FAIL:
    case GETALLUSERS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case UPDATEUSER:
      return {
        ...state,
        users: state.users.map((el) => (el.id === payload.id ? payload : el)),
      };

    case LOGOUT:
      return {
        state
      };

      case DETAILUSER:
        return {
            ...state, users:payload
        }
    default:
      return state;
  }
};

export default userReducer;
