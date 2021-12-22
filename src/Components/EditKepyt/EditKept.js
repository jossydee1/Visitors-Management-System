import React, { useEffect, useState } from "react";
import "./Edit.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useHistory, useParams } from "react-router";

function Edit() {
	const [outDate, setOutDate] = useState(new Date());
	const [text1, setText1] = useState([]);

	const [input2, setInput2] = useState("");
	const [text2, setText2] = useState([]);

	const history = useHistory();
	const { id } = useParams;
	const [visitor, setVisitor] = useState({
		timeOut: "",
		lastName: "",
	});

	// const { timeOut } = visitor;
	const onChange = (e) => {
		setVisitor({ ...visitor, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		loadVisitor();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setText1([outDate, ...text1]);
		setOutDate("");

		setText2([input2, ...text2]);
		setInput2("");

		axios.put(`url/${id}`, visitor);
		history.push("/vms/");
	};

	useEffect(() => {
		fetch(`http://10.1.0.85/testing/edit.php/`)
			.then((res) => res.json())
			.then((result) => {
				setVisitor(result);
			});
	}, []);
	const loadVisitor = () => {
		const result = axios.get(`http://10.1.0.85/testing/edit.php/${id}`);
		setVisitor(result);
	};
	return (
		<div className="edit">
			<form>
				<div className="edit__text">Date & Time Out:</div>
				<DatePicker
					selected={outDate}
					onChange={(date) => setOutDate(date)}
					showTimeInput
					showWeekNumbers
					showYearDropdown
					dateFormat="PPPPppp"
				/>
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
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
}

export default Edit;









import React, { useEffect, useState } from "react";
import "./Edit.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useHistory, useParams } from "react-router";

const Feed = ({ text }) => {
	return <div>{text}</div>;
};

function Edit() {
	const [outDate, setOutDate] = useState(new Date());
	const [text1, setText1] = useState([]);

	const [input2, setInput2] = useState("");
	const [text2, setText2] = useState([]);

	let history = useHistory();
	const { id } = useParams;
	const [visitor, setVisitor] = useState({
		timeOut: "",
		lastName: "",
	});

	const { timeOut, lastName } = visitor;
	const onInputChange = (e) => {
		setVisitor({ ...visitor, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		fetch("http://localhost/testing/edit.php?id=" + id)
			.then((res) => res.json())
			.then((result) => {
				setVisitor(result);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		setText2([input2, ...text2]);
		setInput2("");

		setText1([outDate, ...text1]);
		setOutDate("");

		console.log(handleSubmit);

		// axios.get("http://localhost/testing/edit.php").then();

		// const formData = new FormData();
		// formData.append("textpo", setInput1);
	};
	return (
		<div className="edit">
			<form>
				<div className="edit__text">Date & Time Out:</div>
				<DatePicker
					selected={timeOut}
					onChange={(date) => onInputChange(date)}
					showTimeInput
					showWeekNumbers
					showYearDropdown
					dateFormat="PPPPppp"
				/>
				<br />
				<label>
					Last Name:
					<input
						name="last"
						type="text"
						value={lastName}
						onChange={(e) => onInputChange(e)}
					/>
				</label>
				<button onClick={handleSubmit}>Submit</button>
			</form>

			<div>
				{text2.map((item) => (
					<Feed text={item} />
				))}
			</div>
		</div>
	);
}

export default Edit;








import React, { Component } from "react";
import "./Edit.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useHistory, useParams } from "react-router";

export default class Edit extends Component {
	constructor(props) {
		super(props);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			lastName: "",
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost/testing/edit.php?id=`)
			.then((response) => {
				this.setState({
					// lastName: response.data.lastName,
					post: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onChangeLastName(e) {
		this.setState({
			lastName: e.target.value,
		});
	}

	onSubmit() {}

	render() {
		return (
			<div className="edit">
				<form>
					<div className="edit__text">Date & Time Out:</div>
					{/* <DatePicker
						selected={timeOut}
						onChange={(date) => onInputChange(date)}
						showTimeInput
						showWeekNumbers
						showYearDropdown
						dateFormat="PPPPppp"
					/> */}
					<br />
					<label>
						Last Name:
						<input
							name="last"
							type="text"
							value={this.state.lastName}
							onChange={this.onChangeLastName}
						/>
					</label>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}





import React, { useEffect, useState } from "react";
import "./Edit.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Feed = ({ text }) => {
	return <div>{text}</div>;
};

function Edit(match) {
	const [outDate, setOutDate] = useState(new Date());
	const [text1, setText1] = useState([]);

	const [input2, setInput2] = useState("");
	const [text2, setText2] = useState([]);

	let history = useHistory();
	const { id, lastName } = useParams();
	const [visitor, setVisitor] = useState({
		timeOut: "",
		lastName: "",
	});

	// const { lastName } = visitor;
	const onInputChange = (e) => {
		setVisitor({ ...visitor, [e.target.name]: e.target.value });
	};

	// useEffect(() => {
		// fetch(`http://localhost/testing/edit.php/${id}`);
		// .then((res) => res.json())
		// .then((result) => {
		// setVisitor(result.data);
		// });
	// }, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setText2([input2, ...text2]);
		setInput2("");

		setText1([outDate, ...text1]);
		setOutDate("");

		console.log(handleSubmit);

		await axios
			.put(`http://localhost/testing/update.php/${id}`, visitor)
			.then();
		history.push("/vms/");

		// const formData = new FormData();
		// formData.append("textpo", setInput1);
	};
	return (
		<div className="edit">
			<form>
				<div className="edit__text">Date & Time Out:</div>
				<DatePicker
					// selected={timeOut}
					onChange={(date) => onInputChange(date)}
					showTimeInput
					showWeekNumbers
					showYearDropdown
					dateFormat="PPPPppp"
				/>
				<br />
				<label>
					Last Name:
					<input
						name="last"
						type="text"
						value={lastName}
						onChange={(e) => setInput2(e.target.value)}
					/>
				</label>
				<button onClick={handleSubmit}>Submit</button>
			</form>

			<div>
				{text2.map((item) => (
					<Feed text={item} />
				))}
			</div>
		</div>
	);
}

export default Edit;

