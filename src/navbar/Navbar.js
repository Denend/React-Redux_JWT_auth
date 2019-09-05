import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  console.log(props);
  return (
    <nav className="navbarWrapper">
      <ul className="navBar">
        <NavLink exact activeClassName="active" to="/login">
          Login
        </NavLink>
        <NavLink exact activeClassName="active" to="/notes">
          Notes
        </NavLink>
      </ul>
    </nav>
  );
};
const mapStateToProps = state => ({
  userData: state.loginUser.userData
});
export default connect(mapStateToProps)(Navbar);
