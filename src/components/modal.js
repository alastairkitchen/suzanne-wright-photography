import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ChevronLeftIcon from "../assets/svg/chevron-left.inline.svg";
import ChevronRightIcon from "../assets/svg/chevron-right.inline.svg";
import CloseIcon from "../assets/svg/close-icon.inline.svg";
import DownloadIcon from "../assets/svg/download-icon.inline.svg";



class Modal extends React.Component {

	constructor(props) {
		super(props);

		this.modalWrapper = React.createRef();
		this.keydownFunctions = this.keydownFunctions.bind(this);
		this.attachKeydown = this.attachKeydown.bind(this);
		this.removeKeydown = this.removeKeydown.bind(this);
	}

	keydownFunctions(e) {
		if (e.code === 'ArrowRight') {
			this.props.nextFunction()
		}
		if (e.code === 'ArrowLeft') {
			this.props.previousFunction()
		}
	}

	attachKeydown() {
		if (this.props.previousFunction && this.props.nextFunction) {
			window.addEventListener('keydown', this.keydownFunctions);
		}
	}

	removeKeydown() {
		if (this.props.previousFunction && this.props.nextFunction) {
			window.removeEventListener('keydown', this.keydownFunctions);
		}
	}

	render() {

		return (
			<TransitionGroup
				className="modal-wrapper"
				tabIndex="0"
				ref={this.modalWrapper}
			>
				{this.props.showModal === true && (
					<CSSTransition
						timeout={200}
						classNames="modal"
						onEntered={() => this.attachKeydown()} // add keyboard control
						onExited={() => this.removeKeydown()} // remove keyboard control
					>
						<div className="modal">
							<div className="modal-upper">
								<div className="modal-upper__row">
									{this.props.modalCount && (
										<p className="modal-upper__count">{this.props.modalCount}</p>
									)}
									<a className="modal__btn modal__download-btn" href={this.props.imageUrl} download>
										<DownloadIcon />
									</a>
									<button onClick={this.props.closeModal} className="modal__btn modal__close-btn">
										<CloseIcon />
									</button>
								</div>
							</div>

							<div className="modal__content">
								{this.props.children}


								<div className="modal-navigation">
									{this.props.previousFunction !== undefined && (
										<button onClick={this.props.previousFunction} className="modal__btn modal__navigation-btn modal__previous-btn">
											<ChevronLeftIcon />
										</button>
									)}
									{this.props.nextFunction !== undefined && (
										<button onClick={this.props.nextFunction} className=" modal__btn modal__navigation-btn modal__next-btn">
											<ChevronRightIcon />
										</button>
									)}
								</div>
							</div>

							<div className="modal__bottom-ui">
								{this.props.title && (
									<h4>{this.props.title}</h4>
								)}
							</div>


						</div>
					</CSSTransition>
				)}
			</TransitionGroup>
		);
	}

}

export default Modal;
