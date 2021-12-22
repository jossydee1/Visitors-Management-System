import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import "./FetchByName.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function FetchByPhone() {
	const [search, setSearch] = useState("");

	const [item, setItem] = useState([]);
	useEffect(() => {
		fetch("http://10.1.0.85/testing/api.php")
			.then((res) => res.json())
			.then((json) => {
				setItem(json);
			});
	}, []);

	return (
		<div>
			<input
				type="number"
				placeholder="Search Phone"
				onChange={(e) => setSearch(e.target.value)}
			/>
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
						{item
							.filter((data) => {
								if (search == "") {
									return;
								} else if (data.phoneNumber.includes(search)) {
									return data;
								} else if (data.telNumber.includes(search)) {
									return data;
								}
							})
							.map((data) => (
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
		</div>
	);
}

export default FetchByPhone;
