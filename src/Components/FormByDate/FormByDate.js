import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./FetchByDate.css";
import Axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Feed = ({ text }) => {
	return <div>{text}</div>;
};

function FormByDate() {
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

			{/* <div>
				{text1.map((item) => (
					<Feed text={item} />
				))}
			</div> */}
		</div>
	);
}

export default FormByDate;
