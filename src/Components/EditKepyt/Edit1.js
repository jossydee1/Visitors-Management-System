import React, { Component } from "react";
import "./Edit.css";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import { useParams } from "react-router";

export default class Edit extends Component {
	constructor(props) {
		super(props);
		const { params } = this.props;
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			// firstName: "",
			lastName: {},
		};
	}

	componentDidMount() {
		Axios.get(
			"http://localhost/testing/edit.php?id=" + this.props.match?.params.id
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

	onSubmit(e) {
		e.preventDefault();

		const obj = {
			lastName: this.state.lastName,
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
