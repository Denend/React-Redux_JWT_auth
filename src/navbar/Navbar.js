import React from "react";
import { connect } from "react-redux";

const Navbar = () => {
	const giveColorToLi = liHref => {
		const path = window.location.pathname;
		const liStyle = { color: "yellow" };
		return path.includes(liHref) ? liStyle : null;
	};

	giveColorToLi();
	return (
		<nav className="navbarWrapper">
			<ul className="navBar">
				<li>
					<a style={giveColorToLi("/login")} href="/login">
						Login
					</a>
				</li>
				<li>
					<a style={giveColorToLi("/notes")} href="/notes">
						Notes
					</a>
				</li>
			</ul>
		</nav>
	);
};
const mapStateToProps = state => ({
	userData: state.loginUser.userData
});
export default connect(mapStateToProps)(Navbar);
