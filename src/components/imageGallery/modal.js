import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Modal(props) {
	return (
		<TransitionGroup className="modal-wrapper">
			{props.showModal === true && (
				<CSSTransition timeout={200} classNames="modal">
					<div className="modal">
						{props.children}
						<button onClick={props.closeModal} className="modal__button">close</button>
					</div>
				</CSSTransition>
			)}
		</TransitionGroup>
	);
}

export default Modal;
