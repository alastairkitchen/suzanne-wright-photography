import React from "react";

class Modal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {

		return (
			<div>
				Modal
				{this.props.children}
			</div>
		)
	}

};

export default Modal;
