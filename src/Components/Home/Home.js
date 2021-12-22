import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./Home.css";
import Reception from "./Reception.jpg";
import Plain from "./plain.jpg";

function Home() {
	return (
		<div className="home">
			<img src={Plain} />

			{/* <div className="home__left"> */}
			{/* <div className="home__line1">This</div>
				<div className="home__line2">is</div>
				<div className="home__line3">DANA HOUSE</div> */}
			{/* <Link to="/vms/register/">
					<button className="home__button">Welcome</button>
				</Link> */}
			{/* <img src={Reception} /> */}
			{/* </div> */}
			<div className="home__login">
				<div className="home__login1">
					<Login />
				</div>
			</div>
		</div>
	);
}

export default Home;
