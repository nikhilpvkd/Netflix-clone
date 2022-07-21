import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import Nav from "./includes/Nav";
import "../styles/profilescreen.css";
import { auth } from "../firebase/firebaseConfig";
function ProfileScreen() {
	const { updateUserData } = useContext(userContext);
	const [email, setEmail] = useState("");
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setEmail(user.email);
			} else {
				//loged out
			}
		});
	});
	return (
		<div className="profile_screen">
			<Nav />
			<div className="profile_body">
				<h1>Edit Profile</h1>
				<div className="profile_info">
					<img
						src={require("../assets/images/Netflix-avatar.png")}
						className="profile_logo"
						alt="avatar"
					/>
					<div className="profile_details">
						<h2>{email}</h2>
						<div className="profile_plans">
							<button
								onClick={() =>
									updateUserData({
										type: "LOGOUT",
										payload: null,
									})
								}
								className="profile_signout"
							>
								sign out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
