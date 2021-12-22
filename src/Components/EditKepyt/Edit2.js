import React, { useEffect, useState } from "react";
import "./Edit.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useHistory, useParams } from "react-router";

function Edit(props) {
	// const [outDate, setOutDate] = useState(new Date());
	// const [text1, setText1] = useState([]);

	const [input, setInput] = useState({});
	// const [text2, setText2] = useState([]);

	// const history = useHistory();
	// const { id } = useParams;
	// const [visitor, setVisitor] = useState({
	// 	timeOut: "",
	// 	lastName: "",
	// });

	// const { timeOut } = visitor;
	// const onChange = (e) => {
	// 	setVisitor({ ...visitor, [e.target.name]: e.target.value });
	// };

	useEffect(() => {
		fetch("http://localhost/testing/edit.php/" + props.match.params.id)
			.then((res) => res.json())
			.then((result) => {
				setInput(result);
			});
	});

	function changeInput(e) {}

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setText1([outDate, ...text1]);
	// 	setOutDate("");

	// 	setText2([input2, ...text2]);
	// 	setInput2("");

	// 	axios.put(`url/${id}`, visitor);
	// 	history.push("/vms/");
	// };

	// useEffect(() => {
	// 	fetch(`http://10.1.0.85/testing/edit.php/`)
	// 		.then((res) => res.json())
	// 		.then((result) => {
	// 			setVisitor(result);
	// 		});
	// }, []);
	// const loadVisitor = () => {
	// 	const result = axios.get(`http://10.1.0.85/testing/edit.php/${id}`);
	// 	setVisitor(result);
	// };
	return (
		<div className="edit">
			<form>
				{/* <div> */}{" "}
				{/* <label>
						ID
						<input
							// key={input1}
							type="text"
							name="id"
							value={input.id}
							onChange={changeInput}
						/>
					</label> */}
				<br />
				<label>
					First Name:
					<input
						// key={input1}
						type="text"
						name="firstName"
						// value={input.firstName}
						onChange={changeInput}
					/>
				</label>
				<br />
				<label>
					Last Name:
					<input
						name="last"
						type="text"
						value={input?.lastName}
						onChange={changeInput}
					/>
				</label>
				<br />
				{/*<label>
						Phone No:
						<input
							type="number"
							value={input.phoneNumber}
							onChange={changeInput}
						/>
					</label>
					<br />
				</div>

				<div className="line2">
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={input.email}
							onChange={changeInput}
						/>
					</label>
					<br />
					<label>
						Contact Person:
						<input
							type="text"
							name="contactPerson"
							value={input.contactPerson}
							onChange={changeInput}
						/>
					</label>
					<br />
					<label>
						Department:
						<input
							type="text"
							name="department"
							value={input.department}
							onChange={changeInput}
						/>
					</label>
					<br />
				</div>

				<div className="line3">
					<label>
						Purpose:
						<input
							type="text"
							name="purpose"
							value={input.purpose}
							onChange={changeInput}
						/>
					</label>
					<br />
					<label>
						Company Name:
						<input
							type="text"
							name="companyName"
							value={input.companyName}
							onChange={changeInput}
						/>
					</label>
					<br />

					<label>
						Address:
						<input
							type="text"
							name="address"
							value={input.address}
							onChange={changeInput}
						/>
					</label>
					<br />
				</div>

				<div className="line4">
					<label>
						Tel. No:
						<input
							type="number"
							name="telNumber"
							value={input.telNumber}
							onChange={changeInput}
						/>
					</label>
					<br />

					<label>
						Vehicle No:
						<input
							type="text"
							name="vehicleNumber"
							value={input.vehicleNumber}
							onChange={changeInput}
						/>
					</label>
					<br />

					<label>
						Driver's Name:
						<input
							type="text"
							name="driverName"
							value={input.driverName}
							onChange={changeInput}
						/>
					</label>
					<br />
				</div>
				<div className="line5">
					<label>
						Card No:
						<br />
						<input
							type="text"
							name="cardNumber"
							value={input.cardNumber}
							onChange={changeInput}
						/>
					</label>
					<br />
					<div className="line5a">
						<label htmlfor="Appointment">
							On Appointment?
							<br />
							Yes{" "}
							<input
								name="Appointment"
								type="radio"
								value={input.onAppointmenmt}
								onChange={changeInput}
							/>{" "}
							No{" "}
							<input
								name="Appointment"
								type="radio"
								value="No"
								value={input.onAppointmenmt}
								onChange={changeInput}
							/>
						</label>
						<br />
					</div>
					<div className="line5b">
						<label>
							Carrying Object?
							<br /> Yes{" "}
							<input
								name="object"
								type="radio"
								value={input.carryingObject}
								onChange={changeInput}
							/>{" "}
							No{" "}
							<input
								name="object"
								type="radio"
								value={input.carryingObject}
								onChange={changeInput}
							/>
						</label>
						<br />
					</div>
				</div>

				<div className="line6">
					<label>
						Date & Time In:
						<DatePicker
							// selected={inDate}
							onChange={changeInput}
							showTimeInput
							showWeekNumbers
							showYearDropdown
							dateFormat="PPPPpp"
						/>
					</label>
					<br />

					<label>
						Date & Time Out:
						<DatePicker
							// selected={outDate}
							onChange={changeInput}
							showTimeInput
							showWeekNumbers
							showYearDropdown
							dateFormat="PPPPppp"
						/>
					</label> */}
				{/* <br /> */}
				{/* </div> */}
				<button>Submit</button>
			</form>
		</div>
	);
}

export default Edit;
