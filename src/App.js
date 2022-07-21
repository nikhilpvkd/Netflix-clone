import Home from "./components/Home";
import LoginScreen from "./components/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import ProfileScreen from "./components/ProfileScreen";
export const userContext = React.createContext();

function App() {
	const [user, setUser] = useState("");
	const updateUserData = (action) => {
		switch (action.type) {
			case "LOGOUT":
				console.log("hii");
				setUser(null);
				localStorage.clear();
				break;
			case "LOGIN":
				setUser(action.payload);
				break;
		}
	};
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user_data")));
	}, []);
	console.log(user);
	return (
		<div className="App">
			<userContext.Provider value={{ user, updateUserData }}>
				<Router>
					{!user ? (
						<LoginScreen />
					) : (
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="profile" element={<ProfileScreen />} />
						</Routes>
					)}
				</Router>
			</userContext.Provider>
		</div>
	);
}

export default App;
