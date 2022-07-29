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
    case "setCurrentUserId":
      return {
        ...state,
        currentUserId: action.data,
      };
    default:
      throw new Error(`unknown action.type: ${action.type}`);
  }
};
