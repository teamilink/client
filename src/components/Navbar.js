import { NavLink } from "react-router-dom";

const Navbar = ({ loggedInUser, activeUser }) => {
  const logout = (e) => {
    e.preventDefault();
    activeUser("");
  };
  return (
    <nav>
      {loggedInUser ? (
        <>
          {loggedInUser}
          <NavLink to="/dashboard">Links</NavLink>
          <NavLink to="/dashbaord/appearance">Appearance</NavLink>
          <NavLink to="/upgrade">Upgrade</NavLink>
          <NavLink to="/logout" onClick={logout}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          guest
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
