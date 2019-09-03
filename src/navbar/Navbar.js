import React from "react";

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

export default Navbar;
