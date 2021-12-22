import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";
import Axios from "axios";

const Feed = ({ text }) => {
	return <div>{text}</div>;
};

function Home(type, userData) {
	const [input1, setInput1] = useState("");
	const [text1, setText1] = useState([]);

	const [input2, setInput2] = useState("");
	const [text2, setText2] = useState([]);

	const [input3, setInput3] = useState("");
	const [text3, setText3] = useState([]);

	const [input4, setInput4] = useState("");
	const [text4, setText4] = useState([]);

	const [input5, setInput5] = useState("");
	const [text5, setText5] = useState([]);

	const [input6, setInput6] = useState("");
	const [text6, setText6] = useState([]);

	const [input7, setInput7] = useState("");
	const [text7, setText7] = useState([]);

	const [input8, setInput8] = useState("");
	const [text8, setText8] = useState([]);

	const [input9, setInput9] = useState("");
	const [text9, setText9] = useState([]);

	const [input10, setInput10] = useState("");
	const [text10, setText10] = useState([]);

	const [input11, setInput11] = useState("");
	const [text11, setText11] = useState([]);

	const [input12, setInput12] = useState("");
	const [text12, setText12] = useState([]);

	const [input13, setInput13] = useState("");
	const [text13, setText13] = useState([]);

	const [input14, setInput14] = useState("");
	const [text14, setText14] = useState([]);

	const [input15, setInput15] = useState("");
	const [text15, setText15] = useState([]);

	const [input16, setInput16] = useState("");
	const [text16, setText16] = useState([]);

	const [inDate, setInDate] = useState(new Date());
	const [text17, setText17] = useState([]);

	const [outDate, setOutDate] = useState(new Date());
	const [text18, setText18] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setText1([input1, ...text1]);
		setInput1("");

		setText2([input2, ...text2]);
		setInput2("");

		setText3([input3, ...text3]);
		setInput3("");

		setText4([input4, ...text4]);
		setInput4("");

		setText5([input5, ...text5]);
		setInput5("");

		setText6([input6, ...text6]);
		setInput6("");

		setText7([input7, ...text7]);
		setInput7("");

		setText8([input8, ...text8]);
		setInput8("");

		setText9([input9, ...text9]);
		setInput9("");

		setText10([input10, ...text10]);
		setInput10("");

		setText11([input11, ...text11]);
		setInput11("");

		setText12([input12, ...text12]);
		setInput12("");

		setText13([input13, ...text13]);
		setInput13("");

		setText14([input14, ...text14]);
		setInput14("");

		setText15([input15, ...text15]);
		setInput15("");

		setText16([input16, ...text16]);
		setInput16("");

		setText17([inDate, ...text17]);
		setInDate("");

		setText18([outDate, ...text18]);
		setOutDate("");

		Axios.post("http://localhost:3001/api/insert", {
			firstName: input1,
			lastName: input2,
			phoneNumber: input3,
			email: input4,
			contactPerson: input5,
			department: input6,
			purpose: input7,
			onAppointment: input8,
			companyName: input9,
			address: input10,
			telNumber: input11,
			carryingObject: input12,
			vehicleNumber: input13,
			driverName: input14,
			timeIn: input15,
			timeOut: input16,
		}).then(() => {
			// alert("success");
			console.log("Successsss");
		});
	};

	return (
		<div className="register">
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div className="line1">
					<label>
						First Name:
						<input
							type="text"
							value={input1}
							name="firstName"
							onChange={(e) => setInput1(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Last Name:
						<input
							name="last"
							type="text"
							value={input2}
							onChange={(e) => setInput2(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Phone No:
						<input
							type="number"
							value={input3}
							onChange={(e) => setInput3(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Email:
						<input
							type="email"
							value={input4}
							onChange={(e) => setInput4(e.target.value)}
						/>
					</label>
					<br />
				</div>

				<div className="line2">
					<label>
						Contact Person:
						<input
							type="text"
							value={input5}
							onChange={(e) => setInput5(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Department:
						<input
							type="text"
							value={input6}
							onChange={(e) => setInput6(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Purpose:
						<input
							type="text"
							value={input7}
							onChange={(e) => setInput7(e.target.value)}
						/>
					</label>
					<br />

					<label htmlfor="Appointment">
						On Appointment: Yes{" "}
						<input
							name="Appointment"
							type="radio"
							value={input8}
							onChange={(e) => setInput8(e.target.value)}
						/>{" "}
						No{" "}
						<input
							name="Appointment"
							type="radio"
							value={input9}
							onChange={(e) => setInput9(e.target.value)}
						/>
					</label>
					<br />
				</div>

				<div className="line3">
					<label>
						Company Name:
						<input
							type="text"
							value={input10}
							onChange={(e) => setInput10(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Address:
						<input
							type="text"
							value={input11}
							onChange={(e) => setInput11(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Tel. No:
						<input
							type="number"
							value={input12}
							onChange={(e) => setInput12(e.target.value)}
						/>
					</label>
					<br />
				</div>

				<div className="line4">
					<label>
						Carrying Object: Yes{" "}
						<input
							name="object"
							type="radio"
							value={input13}
							onChange={(e) => setInput13(e.target.value)}
						/>{" "}
						No{" "}
						<input
							name="object"
							type="radio"
							value={input14}
							onChange={(e) => setInput14(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Vehicle No:
						<input
							type="text"
							value={input15}
							onChange={(e) => setInput15(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Driver's Name:
						<input
							type="text"
							value={input16}
							onChange={(e) => setInput16(e.target.value)}
						/>
					</label>
					<br />
				</div>

				<div className="line5">
					<label>
						Date & Time In:
						<DatePicker
							selected={inDate}
							onChange={(date) => setInDate(date)}
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
							selected={outDate}
							onChange={(date) => setOutDate(date)}
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

			<div>
				{text8.map((item) => (
					<Feed text={item} />
				))}
			</div>
		</div>
	);
}

export default Home;