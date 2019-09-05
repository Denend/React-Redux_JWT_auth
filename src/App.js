import React from "react";
import Navbar from "./navbar/Navbar.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./login/Login.js";
import Notes from "./notes/Notes.js";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/login" />} />
					<Route path="/login" component={Login} />
					<Route path="/notes" component={Notes} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
