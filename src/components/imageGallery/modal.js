import React from "react";

class Modal extends React.Component {

	constructor(props) {
		super(props);

		this.renderCloseButton = this.renderCloseButton.bind(this);
	}

	renderCloseButton() {
		if (this.props.defaultCloseButton !== false && this.props.closeModal) {
			return <button className="ak-modal__close-btn" onClick={this.props.closeModal}>close</button>;
		}
	}

	render() {

		return (
			<div className="ak-modal">
				{this.renderCloseButton()}
				<div className="ak-modal__content">
					{this.props.children}
				</div>
				<div className="ak-modal__bg"></div>
			</div>
		)
	}

};

export default Modal;
