import UserState from "../userState";

describe("UserState", () => {
  const user = {
    loggedInUser: null,
    token: null,
    currentUserId: null,
  };

  let userState;
  let update;
  beforeEach(() => {
    userState = new UserState(user);
    update = jest.fn();
  });

  it("inits with user", () => {
    expect(userState.getUser()).toEqual(user);
  });

  it("sets loggedInUser", () => {
    userState.setLoggedInUserState("coder_academy", update);
    expect(userState.getUser().loggedInUser).toBe("coder_academy");
  });

  it("sets token", () => {
    const testToken = "ttookkeenn";
    userState.setTokenState(testToken, update);
    expect(userState.getUser().token).toBe(testToken);
  });

  it("sets currentUserId", () => {
    userState.setCurrentUserIdState(1, update);
    expect(userState.getUser().currentUserId).toBe(1);
  });

  it("store user data in local session storage", () => {
    const tester = {
      username: "tester",
      token: "ttookkeenn",
      id: "100",
    };
    userState.setSessionStorage(tester);
    expect(sessionStorage.getItem("username")).toBe(tester.username);
    expect(sessionStorage.getItem("token")).toBe(tester.token);
    expect(sessionStorage.getItem("id")).toBe(tester.id);
  });

  describe("username validation", () => {
    it("returns true when the username is valid", () => {
      expect(userState.validateUsername("coder_academy")).toBe(true);
    });

    it("returns false when the username is invalid", () => {
      expect(userState.validateUsername("CoderAcademy")).toBe(false);
    });
  });
});
