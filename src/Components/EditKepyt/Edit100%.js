import React, { Component } from "react";
import "./Edit.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import { useParams } from "react-router";
import Header from "../Header/Header";
import { Redirect } from "react-router";

export default class Edit extends Component {
	constructor(props) {
		super(props);
		this.onChangetimeOut = this.onChangetimeOut.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			timeOut: new Date(),
			lastName: {},
			redirect: false,
		};
	}

	componentDidMount() {
		Axios.get(
			"http://10.1.0.85/testing/edit.php?id=" + this.props.match?.params.id
		)
			.then((response) => {
				this.setState({
					firstName: response.data.firstName,
					lastName: response.data.lastName,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	// }

	onChangeLastName(e) {
		this.setState({
			lastName: e.target.value,
		});
	}
	onChangetimeOut(date) {
		this.setState({
			timeOut: date,
		});
	}
	onSubmit(e) {
		e.preventDefault();

		const obj = {
			lastName: this.state.lastName,
			timeOut: this.state.timeOut,
		};

		Axios.post(
			"http://10.1.0.85/testing/update.php?id=" + this.props.match.params.id,
			obj
		).then((res) => console.log(res.data));
		this.setState({ redirect: true });

		this.setState({
			lastName: "",
			outDate: "",
		});
	}

	render() {
		const { redirect } = this.state;

		if (redirect) {
			return <Redirect to="/vms/" />;
		}
		return (
			<div>
				<Header />
				<div className="edit">
					<form onSubmit={this.onSubmit}>
						<div className="edit__text">Enter Visitor's Time Out</div>
						<label>
							Date & Time Out:
							<DatePicker
								selected={this.state.timeOut}
								onChange={this.onChangetimeOut}
								showTimeInput
								showWeekNumbers
								showYearDropdown
								dateFormat="PPPPpp"
							/>
						</label>

						{/* <label>
							Last Name:
							<input
								name="last"
								type="text"
								value={this.state.lastName}
								onChange={this.onChangeLastName}
							/>
						</label> */}
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}
