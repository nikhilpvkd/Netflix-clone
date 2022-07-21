import React, { useEffect, useState } from "react";
import "../../styles/nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
			return () => window.removeEventListener("scroll");
		});
	}, []);
	return (
		<div className={`nav_bar ${show && "nav_black"}`}>
			<div className="nav_container">
				<img
					src={require("../../assets/images/netflix.svg").default}
					alt="Netflix"
					className="nav_logo"
					onClick={() => navigate("/")}
				/>
				{
					<img
						src={require("../../assets/images/Netflix-avatar.png")}
						className="nav_avatar"
						alt="avatar"
						onClick={() => navigate("/profile")}
					/>
				}
			</div>
		</div>
	);
}

export default Nav;
