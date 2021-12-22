import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FetchByDate.css";
import Axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Feed = ({ text }) => {
	return <div>{text}</div>;
};

function FetchByDate() {
	const [item, setItem] = useState([]);
	useEffect(() => {
		fetch("http://localhost/testing/fetchByDate.php")
			.then((res) => res.json())
			.then((result) => {
				setItem(result);
			});
	}, []);

	const [startDate, setStartDate] = useState(new Date());
	const [text1, setText1] = useState([]);

	const [endDate, setEndDate] = useState(new Date());
	const [text2, setText2] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setText1([startDate, ...text1]);
		setStartDate("");

		setText2([endDate, ...text2]);
		setEndDate("");

		console.log(handleSubmit);

		Axios.post("http://localhost/testing/fetchByDate.php", {
			startDate: startDate,
			endDate: endDate,
		}).then(() => {
			// alert("success");
			console.log("Successsss");
		});
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div className="line5">
					<label>
						Start Date:
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							showTimeInput
							showWeekNumbers
							showYearDropdown
							dateFormat="PPPPpp"
						/>
					</label>
					<br />

					<label>
						End Date:
						<DatePicker
							selected={endDate}
							onChange={(date) => setEndDate(date)}
							showTimeInput
							showWeekNumbers
							showYearDropdown
							dateFormat="PPPPppp"
						/>
					</label>
					<br />
				</div>
				<button onClick={handleSubmit}>Submit</button>
			</form>

			<ReactHTMLTableToExcel
				id="test-table-xls-button"
				className="export__all"
				table="table-to-xls"
				filename="tablexls"
				sheet="tablexls"
				buttonText="Export"
			/>
			<div className="table">
				<table id="table-to-xls">
					<thead className="table__head">
						<tr>
							<th style={{ maxWidth: "40px" }}>ID</th>
							<th style={{ maxWidth: "150px" }}>First Name</th>
							<th style={{ maxWidth: "150px" }}>Last Name</th>
							<th style={{ maxWidth: "100px" }}>Phone number</th>
							<th style={{ maxWidth: "120px" }}>Email</th>
							<th style={{ maxWidth: "60px" }}>Contact Person</th>
							<th style={{ maxWidth: "60px" }}>Dept</th>
							<th style={{ maxWidth: "60px" }}>Purpose</th>
							<th style={{ maxWidth: "80px" }}>Company Name</th>
							<th style={{ maxWidth: "80px" }}>Company Address</th>
							<th style={{ maxWidth: "70px" }}>Company Tel</th>
							<th style={{ maxWidth: "60px" }}>Vehicle Number</th>
							<th style={{ maxWidth: "100px" }}>Driver's Name</th>
							<th style={{ maxWidth: "100px" }}>Card No</th>
							<th style={{ maxWidth: "40px" }}>On App</th>
							<th style={{ maxWidth: "40px" }}>Obj</th>
							<th style={{ maxWidth: "120px" }}>Time In</th>
							<th style={{ maxWidth: "120px" }}>Time Out</th>
						</tr>
					</thead>
					<tbody className="table__body">
						{item.map((data) => (
							<tr key={data.id}>
								<td>{data.id}</td>
								<td>{data.firstName}</td>
								<td>{data.lastName}</td>
								<td>{data.phoneNumber}</td>
								<td>{data.email}</td>
								<td>{data.contactPerson}</td>
								<td>{data.department}</td>
								<td>{data.purpose}</td>
								<td>{data.companyName}</td>
								<td>{data.address}</td>
								<td>{data.telNumber}</td>
								<td>{data.vehicleNumber}</td>
								<td>{data.driverName}</td>
								<td>{data.cardNumber}</td>
								<td>{data.onAppointment}</td>
								<td>{data.carryingObject}</td>
								<td>{data.timeIn}</td>
								<td>{data.timeOut}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* <div>
				{text1.map((item) => (
					<Feed text={item} />
				))}
			</div> */}
		</div>
	);
}

export default FetchByDate;
