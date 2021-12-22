import React, { Component } from "react";
import "./Edit.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import { useParams } from "react-router";
import DatePickerWithFormik from "react-datepicker";

export default class Edit extends Component {
	constructor(props) {
		super(props);
		const { params } = this.props;
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeOutDate = new Date();
		this.state = {
			// firstName: "",
			lastName: {},
			outDate: {},
		};
	}

	componentDidMount() {
		Axios.get(
			"http://localhost/testing/edit.php?id=" + this.props.match.params.id
		)
			.then((response) => {
				this.setState({
					outDate: response.data.outDate,
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

	// onChangeOutDate = ({ startDate, endDate }) => {
	// 	// setStartDate(startDate);
	// 	setEndDate(endDate);
	// 	// setFieldValue("startDate", startDate);
	// 	setFieldValue("endDate", endDate);
	// };

	onChangeOutDate(date) {
		this.setState({
			outDate: date.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const obj = {
			lastName: this.state.lastName,
			outDate: this.state.outDate,
		};

		Axios.post(
			"http://localhost/testing/update.php?id=" + this.props.match.params.id,
			obj
		).then((res) => console.log(res.data));

		this.setState({
			lastName: "",
		});
	}

	render() {
		return (
			<div className="edit">
				<form onSubmit={this.onSubmit}>
					<div className="edit__text">Date & Time Out:</div>
					<label>
						Date & Time Out:
						<DatePicker
							selected={this.state.outDate}
							onChange={this.onChangeOutDate}
							showTimeInput
							showWeekNumbers
							showYearDropdown
							dateFormat="PPPPppp"
						/>
					</label>
					{/* <DatePicker
						value={format(dateDeNaissance, "DD/MM/YYYY")}
						onChange={this.handleCalendarChange}
						dateFormat="LLL"
					/> */}
					component={DatePickerWithFormik}
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
