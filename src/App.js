import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import AllData from "./Components/AllData/AllData";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FetchByDate from "./Components/FetchByDate/FetchByDate";
import FetchByName from "./Components/FetchByName/FetchByName";
import FetchByPhone from "./Components/FetchByPhone/FetchByPhone";
import FetchByEmail from "./Components/FetchByEmail/FetchByEmail";
import FetchByContactPerson from "./Components/FetchByContactPerson/FetchByContactPerson";
import FetchByDepartment from "./Components/FetchByDepartment/FetchByDepartment";
import FetchByCompany from "./Components/FetchByCompany/fetchByCompany";
import FetchByDriver from "./Components/FetchByDriver/FetchByDriver";
import Edit from "./Components/Edit/Edit";
import Footer from "./Components/Footer/Footer";

function App() {
	const [connect, setConnect] = useState(false);

	const accept = (est) => {
		setConnect(est);
	};
	//BEM
	return (
		<Router>
			<div className="app">
				{/* {!connect ? (
					<Home accept={accept} />
				) : ( */}
				<Switch>
					<Route path="/vms/login">{/* <Login /> */}</Route>
					<Route path="/vms/timeOut/:id" component={Edit}></Route>

					<Route path="/vms/date">
						<Header />
						<FetchByDate />
						<Footer />
					</Route>
					<Route path="/vms/driver">
						<Header />
						<FetchByDriver />
						<Footer />
					</Route>
					<Route path="/vms/company">
						<Header />
						<FetchByCompany />
						<Footer />
					</Route>
					<Route path="/vms/department">
						<Header />
						<FetchByDepartment />
						<Footer />
					</Route>
					<Route path="/vms/contactperson">
						<Header />
						<FetchByContactPerson />
						<Footer />
					</Route>
					<Route path="/vms/email">
						<Header />
						<FetchByEmail />
						<Footer />
					</Route>
					<Route path="/vms/phone">
						<Header />
						<FetchByPhone />
						<Footer />
					</Route>
					<Route path="/vms/name">
						<Header />
						<FetchByName />
						<Footer />
					</Route>
					<Route path="/vms/all">
						<Header />
						<AllData />
						<Footer />
					</Route>
					<Route path="/vms/register">
						<Header />
						<Register />
						<Footer />
					</Route>
					<Route path="/">
						{/* <Header /> */}
						<Home />
						<Footer />
					</Route>
				</Switch>
				{/* )} */}
			</div>
		</Router>
	);
}

export default App;
