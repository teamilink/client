export const reducer = (state, action) => {
  switch (action.type) {
    case "setLoggedInUser":
      return {
        ...state,
        loggedInUser: action.data,
      };
    default:
      throw new Error(`unknown action.type: ${action.type}`);
  }
};
