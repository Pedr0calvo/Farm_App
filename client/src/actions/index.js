// import { useNavigation } from "@react-navigation/native";
// const navigation = useNavigation();
// import UserContext from "../components/UserContext";
// import { useContext } from "react";
// const { userMod, handleuserMod } = useContext(UserContext);
import { useNavigation } from "@react-navigation/native";
import UserContext from "../components/UserContext";
import { useContext } from "react";
import axios from "axios";
import { Alert } from "react-native";

export const getFarms = (user) => {
  return async function (dispatch) {
    var config = {
      method: "get",
      url: "https://farm-app-back-production.up.railway.app/farms",
      headers: { user },
    };

    axios(config)
      .then(function (response) {
        return dispatch({
          type: "GET_FARMS",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postFarms = (farm, userMod) => {
  return async function (dispatch) {
    var config = {
      method: "post",
      url: "https://farm-app-back-production.up.railway.app/farms",
      headers: {
        "Content-Type": "application/json",
      },
      data: { farm, userMod },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const putFarms = (farm) => {
  return async function (dispatch) {
    var data = farm;

    var config = {
      method: "put",
      url: `https://farm-app-back-production.up.railway.app/farms/delete/${farm}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getTasks = (id) => {
  return async function (dispatch) {
    var config = {
      method: "get",
      url: "https://farm-app-back-production.up.railway.app/tasks",
      headers: {
        id,
      },
    };

    axios(config)
      .then(function (response) {
        return dispatch({
          type: "GET_TASKS",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postTasks = (text, modalfarm) => {
  return async function (dispatch) {
    var config = {
      method: "post",
      url: "https://farm-app-back-production.up.railway.app/tasks",
      headers: {
        "Content-Type": "application/json",
      },
      data: { text, modalfarm },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getAplications = (id) => {
  return async function (dispatch) {
    var config = {
      method: "get",
      url: "https://farm-app-back-production.up.railway.app/aplications",
      headers: {
        id,
      },
    };

    axios(config)
      .then(function (response) {
        return dispatch({
          type: "GET_APLICATIONS",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postAplications = (aplica, modalfarm) => {
  return async function (dispatch) {
    var config = {
      method: "post",
      url: "https://farm-app-back-production.up.railway.app/aplications",
      headers: {
        "Content-Type": "application/json",
      },
      data: { aplica, modalfarm },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getYields = (id) => {
  return async function (dispatch) {
    var config = {
      method: "get",
      url: "https://farm-app-back-production.up.railway.app/yield",
      headers: { id },
    };

    axios(config)
      .then(function (response) {
        return dispatch({
          type: "GET_YIELDS",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postYield = (harvest, modalfarm) => {
  return async function (dispatch) {
    var config = {
      method: "post",
      url: "https://farm-app-back-production.up.railway.app/yield",
      headers: {
        "Content-Type": "application/json",
      },
      data: { harvest, modalfarm },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    var config = {
      method: "get",
      url: "https://farm-app-back-production.up.railway.app/user",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        return dispatch({
          type: "GET_USERS",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const createUser = (payload) => {
  return async function (dispatch) {
    var config = {
      method: "post",
      url: "https://farm-app-back-production.up.railway.app/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: { payload },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postUser = (JWT) => {
  return async function (dispatch) {
    var config = {
      method: "get",
      url: "https://farm-app-back-production.up.railway.app/user/login",
      headers: { data: JWT },
    };

    axios(config)
      .then(function (response) {
        return dispatch({
          type: "USER",
        });
      })
      .catch(function (error) {
        Alert.alert("Access denied");
      });
  };
};

export const setUserFalse = () => {
  try {
    return async function (dispatch) {
      return dispatch({
        type: "USER_FALSE",
      });
    };
  } catch (error) {
    console.error(error);
  }
};
