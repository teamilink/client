export const reducer = (state, action) => {
  switch (action.type) {
    case "setLoggedInUser":
      return {
        ...state,
        loggedInUser: action.data,
      };
    case "setToken":
      return {
        ...state,
        token: action.data,
      };
    case "setCurrentUser":
      return {
        ...state,
        currentUser: action.data,
      };
    default:
      throw new Error(`unknown action.type: ${action.type}`);
  }
};
