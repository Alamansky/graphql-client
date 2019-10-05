import React, { Component } from 'react';

export default class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
		};

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		const formData = {};
		formData[e.target.name] = e.target.value;
		this.setState({ ...formData });
	}
	render() {
		const { onSubmit } = this.props;
		const { title, body } = this.state;
		return (
			<form
				onSubmit={({ variables: { title, body } }) => {
					onSubmit().then(() => {
						this.setState({
							title: '',
							body: '',
						});
					});
				}}
			>
				<input name='title' type='text' onChange={this.handleInput} value={title} placeholder='title' />
				<textarea name='body' type='text' onChange={this.handleInput} value={body} placeholder='body' />
				<button>submit</button>
			</form>
		);
	}
}
