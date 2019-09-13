import React, { Component } from 'react';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name
		}
	}
	render() {
		return (
			<div>
				<p>name: {this.state.name}</p>
			</div>
		);
	}
}

export default Profile;