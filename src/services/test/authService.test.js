import signInUser from "../authServices";
import signUpUser from "../authServices";

jest.mock("../authServices");

describe("authServices", () => {
  describe("signInUser", () => {
    const signInUser = jest.fn(async (data) => data);

    it("calls signInUser() when the data passed", async () => {
      const input = { email: "coder@test.com", password: "1234" };
      await signInUser(input);
      expect(signInUser).toHaveBeenCalledTimes(1);
      expect(signInUser).toHaveBeenCalledWith(input);
    });
  });
  describe("signUpUser", () => {
    const signUpUser = jest.fn(async (data) => data);

    it("calls signUpUser() when the data passed", async () => {
      const input = {
        username: "coder",
        email: "coder@test.com",
        password: "1234",
      };
      await signUpUser(input);
      expect(signUpUser).toHaveBeenCalledTimes(1);
      expect(signUpUser).toHaveBeenCalledWith(input);
    });
  });
});
