import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		// get form data out of state
		const { title, description } = this.state;

		fetch("http://localhost:3000/posts", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(this.state),
		}).then((info) => {
			console.log(info);
		});
	};
	render() {
		const { classes } = this.props;
		const { title, description } = this.state;
		return (
			<div>
				<form method="POST" action="http://localhost:3000/posts">
					<input label="Title" name="title" />
					<br />
					<input label="Description" name="description" />
					<br />

					<button type="Submit" variant="contained" color="primary">
						Submit to send data
					</button>
				</form>
			</div>
		);
	}
}

export default App;
