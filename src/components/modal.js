import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Modal extends React.Component {

	constructor(props) {
		super(props);

		this.modalWrapper = React.createRef();
	}

	componentDidMount() {

	}

	render() {

		return (
			<TransitionGroup
				className="modal-wrapper"
				tabIndex="1"
				ref={this.modalWrapper}
			>
				{this.props.showModal === true && (
					<CSSTransition timeout={200} classNames="modal">
						<div className="modal">
							<div className="modal__content">
								{this.props.children}
							</div>

							<div className="modal__ui">
								{this.props.modalCount}
								<button onClick={this.props.closeModal} className="modal__btn">close</button>
							</div>

							{this.props.previousFunction !== undefined && (
								<button onClick={this.props.previousFunction} className="modal__navigation modal__previous-btn">Previous</button>
							)}
							{this.props.nextFunction !== undefined && (
								<button onClick={this.props.nextFunction} className="modal__navigation modal__next-btn">Next</button>
							)}
						</div>
					</CSSTransition>
				)}
			</TransitionGroup>
		);
	}

}

export default Modal;
