import axios from "axios";
import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  GETALLUSERS,
  GETALLUSERS_SUCCESS,
  GETALLUSERS_FAIL,
  DELETEUSER,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATEUSER,
  GET_PROFIL,
  GET_PROFIL_SUCCESS,
  GET_PROFIL_FAIL,
  LOGOUT,
  DETAILUSER
} from "./actionTypes";

export const userSignUp = (newUser) => async (dispatch) => {
  dispatch({ type: SIGN_UP });
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/utilisateur/signUp",
      newUser
    );
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: error.response,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GETALLUSERS });
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/utilisateurs");
    dispatch({
      type: GETALLUSERS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GETALLUSERS_FAIL,
      payload: error.response,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await axios
      .delete(`http://127.0.0.1:8000/api/utilisateur/delete/${id}`)
      .then(async (data) => {
        const allUsers = await axios.get(
          "http://127.0.0.1:8000/api/utilisateurs"
        );
        dispatch({
          type: DELETEUSER,
          payload: allUsers.data,
        });
      });
  } catch (error) {
    alert("delete user error");
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/utilisateur/login",
      user
    );
    localStorage.setItem("one-user", res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const editeUser = (user) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://127.0.0.1:8000/api/utilisateur/update/${user.id}`,
      user
    );
    dispatch({
      type: UPDATEUSER,
      payload: res.data,
    });
  } catch (error) {
    alert("update product error");
  }
};

export const getProfil = () => async (dispatch) => {
  dispatch({ type: GET_PROFIL });
  const user = localStorage.getItem("one-user");
  try {
    // const res = await axios.get("/user/profile", config)
    dispatch({
      type: GET_PROFIL_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFIL_FAIL,
      payload: error.response.data,
    });
  }
};

export const userLogOut = () => {
  localStorage.clear();
  document.location.href = "/";
  return {
    type: LOGOUT,
  };
};

export const getOneUser = (id) => async(dispatch) => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/utilisateur/detail/${id}`);
    dispatch(
      {
        type : DETAILUSER,
        payload : res.data
      }
    )
  } catch (error) {
    alert("get one user error");
  }
}