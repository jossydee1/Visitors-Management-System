import React, { useEffect, useState } from "react";
import "./Data.css";

const Data2 = () => {
	const [item, setItem] = useState([]);
	useEffect(() => {
		fetch("http://10.1.0.85/vms/api2.php")
			.then((res) => res.json())
			.then((result) => {
				setItem(result);
			});
	}, []);
	return (
		<div>
			<div className="table">
				<table>
					<thead className="table__head">
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Phone number</th>
							<th>Email</th>
							<th>Contact Person</th>
							<th>Department</th>
							<th>Purpose</th>
							<th>On Appointment</th>
							<th>Company Name</th>
							<th>Company Address</th>
							<th>Company Tel</th>
							<th>Carrying Object</th>
							<th>Vehicle Number</th>
							<th>Driver's Name</th>
							<th>Time In</th>
							<th>Time Out</th>
						</tr>
					</thead>
					<tbody className="table__body">
						{item.map((data) => (
							<tr key={data.id}>
								<td>{data.COCODE}</td>
								<td>{data.V_CODDE}</td>
								<td>{data.V_INDATE}</td>
								<td>{data.V_OUTDATE}</td>
								<td>{data.V_CARDNO}</td>
								<td>{data.V_NAME}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Data2;
