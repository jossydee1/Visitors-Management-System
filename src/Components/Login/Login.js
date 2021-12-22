import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";
import Axios from "axios";
import Logo from "./Logo.png";

function Login(props, dispatch) {
	const [username, setUsername] = useState("");
	const [text1, setText1] = useState([]);

	const [password, setPassword] = useState("");
	const [text2, setText2] = useState([]);

	const history = useHistory();

	// const [input1, setInput1] = useState("");
	// const [text1, setText1] = useState([]);

	// const [input2, setInput2] = useState("");
	// const [text2, setText2] = useState([]);

	// const refusername = useRef(null);
	// const refpassword = useRef(null);

	const Login = (e) => {
		e.preventDefault();

		setText1([username, ...text1]);
		setUsername("");

		setText2([password, ...text2]);
		setPassword("");

		const coJson = Axios.post("http://10.1.0.85/testing/login.php", {
			username: username,
			password: password,
		}).then((response) => {
			console.log(response);
			if (response.data[0].Message === "Success") {
				history.push("/vms/register");
			} else {
				history.push("/vms/");
				alert("Wrong Username or password");
			}
		});

		// props.accept(coJson.connect);

		// .then((res) => {
		// 	// history.push("/");
		// dispatch({
		// 	data: res.message,
		// });
		// });
		// .catch((error) => alert(error.message));

		// .then((res) => res.json())

		// .then((res) => {
		// 	useHistory.push("/vms");
		// });

		// .then((Response) => Response.json())
		// .then((Response) => {
		// 	if (Response[0].Message == "Success") {
		// 		history.push("/vms");
		// 		console.log("true");
		// 		alert(Response[0].Message);
		// 		// this.props.navigation.navigate("HomeScreen");
		// 	}
		// });
		// .then((res) => {
		// 	history.push("/vms");
		// });
		// .catch((error) => {
		// 	console.error("ERROR FOUND" + error);
		// });

		// .then((error) => {
		// 	// alert("success");
		// 	console.log(console.error(error));
		// });

		// 	auth
		// 		.signInWithEmailAndPassword(username, password)
		// 		.then((auth) => {
		// 			useHistory.push("/");
		// 		})
		// 		.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<img className="login__logo" src={Logo} />
			<p>Kindly fill in the login details and click the login button</p>
			<form>
				<div className="login__input">
					<label>
						{" "}
						User Name
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>

					<label>
						{" "}
						Password
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>

				<Link onClick={Login} to="/vms/" className="login__button">
					<span>Login</span>
				</Link>
			</form>
		</div>
	);
}

export default Login;
