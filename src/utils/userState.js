class UserState {
  constructor(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  setLoggedInUserState(username, update) {
    this.user.loggedInUser = username;
    update(this.user);
  }

  setTokenState(token, update) {
    this.user.token = token;
    update(this.user);
  }

  setCurrentUserIdState(id, update) {
    this.user.currentUserId = id;
    update(this.user);
  }

  setSessionStorage(user) {
    sessionStorage.setItem("username", user.username);
    sessionStorage.setItem("token", user.token);
    sessionStorage.setItem("id", user.id);
  }

  validateUsername(string) {
    return /^[a-z0-9_-]{0,30}$/.test(string);
  }
}

export default UserState;
