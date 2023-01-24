const initialState = {
  allFarms: [],
  tasks: [],
  aplications: [],
  yields: [],
  users: [],
  isActive: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_FARMS": {
      return {
        ...state,
        allFarms: action.payload,
      };
    }
    case "GET_TASKS": {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case "GET_APLICATIONS": {
      return {
        ...state,
        aplications: action.payload,
      };
    }
    case "GET_YIELDS": {
      return {
        ...state,
        yields: action.payload,
      };
    }
    case "GET_USERS": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "USER": {
      return {
        ...state,
        isActive: true,
      };
    }
    case "USER_FALSE": {
      return {
        ...state,
        isActive: false,
      };
    }
    case "UNMOUNT_FARMS": {
      return {
        ...state,
        allFarms: [],
      };
    }
    default:
      return state;
  }
}
