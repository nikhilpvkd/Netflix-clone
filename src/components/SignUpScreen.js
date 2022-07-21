import React, { useContext, useRef } from "react";
import { auth } from "../firebase/firebaseConfig";
import "../styles/SignUp.css";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
function SignUpScreen() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const navigate = useNavigate();
	const { updateUserData } = useContext(userContext);

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser);
				let data = authUser.user.uid;
				localStorage.setItem("user_data", JSON.stringify(data));
				updateUserData({ type: "LOGIN", payload: data });
				navigate("/");
			})
			.catch((err) => {
				alert(err.message);
			});
	};
	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser.user.uid);
				let data = authUser.user.uid;
				localStorage.setItem("user_data", JSON.stringify(data));
				updateUserData({ type: "LOGIN", payload: data });
				navigate("/");
			})
			.catch((err) => {
				alert(err.message);
			});
	};
	return (
		<div className="SignUpScreen">
			<h1>Sign In</h1>
			<form>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input
					ref={passwordRef}
					type="password"
					placeholder="Password"
				/>
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="grey">New to Netflix?</span>
					<span className="signupScreen_link" onClick={register}>
						Sign Up Now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignUpScreen;
