class InputValidation {
  // validateEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  validateUsername(username) {
    return /^[a-z0-9_-]{4,30}$/.test(username);
  }

  validateProfileName(name) {}

  validateBio(bio) {}
}

export default InputValidation;
