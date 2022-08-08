import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import Post from "./store/PostContext";


/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";

function App() {
	const { user, setUser } = useContext(AuthContext);
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);
	return (
		<div>
			<Post>
				<Router>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/Login">
						<Login />
					</Route>
					<Route path="/Create">
						<Create />
					</Route>
					<Route path="/view">
						<View />
					</Route>
				</Router>
			</Post>
		</div>
	);
}

export default App;
