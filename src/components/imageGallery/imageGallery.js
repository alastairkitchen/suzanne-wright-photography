import React, { Fragment } from "react";
import Img from "gatsby-image";
import Modal from "../imageGallery/modal";


class ImageGallery extends React.Component {

  constructor(props) {
    super(props);

    this.renderImages = this.renderImages.bind(this);
    this.activateModal = this.activateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      showModal: false,
      modalContent: null
    }
  }

  renderImages() {

    if (this.props.images) {
      if (this.props.images.length > 0) {
        let imageElements = this.props.images.map((image, i) => {

          let bgImageStyle = { backgroundImage: `url(${image})` }

          return (
            <div
              className="image-grid__column"
              key={"image-gallery-" + i}
              onClick={() => this.activateModal(image)}
            >
              <div className="image-grid__inner">
                <div className="image-grid__image" style={bgImageStyle}></div>
              </div>
            </div>
          );
        });

        return (
          <div className="image-grid image-grid--3-col">{imageElements}</div>
        );
      } else {
        return <p>No images found...</p>;
      }
    }

    // no images props? return null
    return null;

  }

  activateModal(image) {

    let modalImage = (
      <img className="modal__image" src={image} />
    );

    this.setState((state) => ({
      showModal: true,
      modalContent: modalImage
    }))

  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render() {

    console.dir(this.props.images)

    return (
      <Fragment>
        {this.renderImages()}
        <Modal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
        >
          {this.state.modalContent}
        </Modal>
      </Fragment>

    )

  }

};

export default ImageGallery;
