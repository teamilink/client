import { reducer } from "../../../utils/reducer";
import App from "../App";

describe("App", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loggedInUser: null,
      token: null,
      currentUserId: null,
      links: [
        {
          id: 1,
          title: "Github",
          link_address: "https://github.com/",
        },
        {
          id: 2,
          title: "Portfolio",
          link_address: "https://coder.com/",
        },
      ],
      appearance: {
        profile_title: "",
        bio: "",
        bg_color: "light",
        user_id: 1,
      },
    };
  });
  describe("reducer - user", () => {
    it("returns loggedInUser state", () => {
      let setLoggedInUser = jest.fn();
      const updateAction = { type: "setLoggedInUser", data: "coder_academy" };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.loggedInUser).toBe("coder_academy");
    });

    it("returns setToken state", () => {
      let setToken = jest.fn();
      const updateAction = { type: "setToken", data: "abc*&^(" };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.token).toBe("abc*&^(");
    });

    it("returns setCurrentUserId state", () => {
      let setCurrentUserId = jest.fn();
      const updateAction = { type: "setCurrentUserId", data: "3" };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.currentUserId).toBe("3");
    });
  });

  describe("reducer - links", () => {
    it("sets links state", () => {
      let setLinks = jest.fn();
      let newLinksData = [
        {
          id: 2,
          title: "Invite your friends",
          link_address: "https://coder.com/invitation",
        },
      ];

      const updateAction = { type: "setLinks", data: newLinksData };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.links[0].title).toBe("Invite your friends");
      expect(updatedState.links.length).toBe(1);
    });

    it("adds links state", () => {
      let addLink = jest.fn();
      let newLink = [
        {
          id: 3,
          title: "Invite your friends",
          link_address: "https://coder.com/invitation",
        },
      ];

      const updateAction = { type: "addLink", data: newLink };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.links.length).toBe(3);
    });

    it("updates links state", () => {
      let updateLinks = jest.fn();
      let editedLink = {
        id: 2,
        title: "Portfolioooooo",
        link_address: "https://coder-academy.com/",
      };

      const updateAction = { type: "updateLinks", data: editedLink };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.links[1].title).toBe("Portfolioooooo");
    });

    it("does not update links state if the id doesn't match", () => {
      let updateLinks = jest.fn();
      let editedLink = {
        id: 3,
        title: "Portfolioooooo",
        link_address: "https://coder-academy.com/",
      };

      const updateAction = { type: "updateLinks", data: editedLink };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.links.length).toBe(2);
    });

    it("removes a link", () => {
      let removeLink = jest.fn();
      let deletedLink = 1;

      const updateAction = { type: "removeLink", data: deletedLink };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.links.length).toBe(1);
    });

    it("does not remove a link if the id does not match", () => {
      let removeLink = jest.fn();
      let deletedLink = 10;

      const updateAction = { type: "removeLink", data: deletedLink };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.links.length).toBe(2);
    });
  });

  describe("reducer - appearance", () => {
    it("sets appearance", () => {
      let setAppearance = jest.fn();
      let newAppearance = {
        profile_title: "Coder Academy",
        bio: "Welcome! ",
        bg_color: "colourful",
        user_id: 1,
      };

      const updateAction = { type: "setAppearance", data: newAppearance };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.appearance.profile_title).toBe("Coder Academy");
    });

    // editAppearance - this action.data is the part of event
    // so it'll be handled in the AppearanceEditor component

    it("resets appearance", () => {
      let resetAppearance = jest.fn();
      const updateAction = { type: "resetAppearance", data: initialState };
      const updatedState = reducer(initialState, updateAction);
      expect(updatedState.appearance.bg_color).toBe("light");
    });
  });

  it("throws error if unknown action.type is called", () => {
    const updateAction = { type: "unknown", data: initialState };
    expect(() => reducer(initialState, updateAction)).toThrow(
      "unknown action.type: unknown"
    );
  });
});
