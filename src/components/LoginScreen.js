import "../styles/loginScreen.css";
import React, { useState } from "react";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className="login_screen">
			<img
				src={require("../assets/images/netflix.svg").default}
				alt="Netflix"
				className="login_logo"
				onClick={() => setSignIn(false)}
			/>
			<button onClick={() => setSignIn(true)} className="signin_button">
				Sign In
			</button>
			<div className="loginscreen_gradient"></div>
			<div className="content">
				{signIn ? (
					<SignUpScreen email />
				) : (
					<>
						<h1>Unlimited movies, Tv shows and more</h1>
						<h3>Watch any where, Cancel anytime</h3>
						<h5>
							Ready to watch? Enter your email to create or
							restart your membership.
						</h5>
						<form onSubmit={() => setSignIn(true)}>
							<input type="email" placeholder="Email address" />
							<button type="submit" className="start_button">
								GET STARTED
							</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}

export default LoginScreen;
