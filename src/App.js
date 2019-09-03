import React from "react";
import Navbar from "./navbar/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login/Login.js";
import Notes from "./notes/Notes.js";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/notes" component={Notes} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
