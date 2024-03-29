import React, { Fragment } from "react";
import PlusBoxIcon from "../../assets/svg/plus-box.inline.svg";
import Modal from "../modal";
import lazyloadImages from "../../utils/lazyLoadImages";

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);

    this.renderImages = this.renderImages.bind(this);
    this.activateModal = this.activateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.navigatePrevImage = this.navigatePrevImage.bind(this);
    this.navigateNextImage = this.navigateNextImage.bind(this);

    this.state = {
      showModal: false,
      modalContent: null,
      activeImageId: null
    }
  }

  componentDidMount() {
    const lazyLoadElements = document.querySelectorAll(".lazy-load");
    if (lazyLoadElements.length > 0) {
      lazyloadImages(lazyLoadElements);
    }
  }

  renderImages() {

    if (this.props.imageGallery) {
      if (this.props.imageGallery.length > 0) {
        let imageElements = this.props.imageGallery.map((gallery, i) => {

          let bgImageStyle = { backgroundImage: `url(${gallery.image}?nf_resize=smartcrop&w=450&h=450)` }

          return (
            <div
              className="image-grid__column"
              key={"image-gallery-" + i}
            >
              <div className="image-grid__inner">
                <button
                  type="button"
                  onClick={() => this.activateModal(i)}
                  className="image-grid__button"
                >
                  <div className="image-grid__image lazy-load" style={bgImageStyle}>
                    <div className="image-grid__ui">
                      <PlusBoxIcon className="image-grid__ui-item" />
                      <p className="image-grid__ui-item">view</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          );
        });

        return (
          <div className="image-grid image-grid--3-col">{imageElements}</div>
        );
      } else {
        return <div className="site-container"><p>No images found...</p></div>;
      }
    }

    // no images props? return null
    return null;

  }

  activateModal(imageId) {
    this.setState((state) => ({
      showModal: true,
      activeImageId: imageId
    }))
  }

  closeModal() {
    this.setState({
      showModal: false,
      activeImageId: null
    })
  }

  navigatePrevImage() {
    if (this.state.activeImageId !== 0) {
      let previousImageId = (this.state.activeImageId - 1)
      this.setState((state) => ({
        activeImageId: previousImageId
      }))
    }
  }

  navigateNextImage() {

    if (this.state.activeImageId < (this.props.imageGallery.length - 1)) {
      let nextImageId = (this.state.activeImageId + 1)
      this.setState((state) => ({
        activeImageId: nextImageId
      }))
    }
  }

  render() {


    return (
      <Fragment>
        {this.renderImages()}
        <Modal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          previousFunction={this.navigatePrevImage}
          nextFunction={this.navigateNextImage}
          modalCount={this.state.activeImageId != null ? `${this.state.activeImageId + 1}/${this.props.imageGallery.length}` : null}
          title={this.state.activeImageId != null ? this.props.imageGallery[this.state.activeImageId].title : null}
          imageUrl={`${this.state.activeImageId !== null ? this.props.imageGallery[this.state.activeImageId].image + '?nf_resize=smartcrop&w=1300&h=800' : ''}`}
        >
          {this.state.activeImageId !== null && (
            <img className="modal__image" src={`${this.props.imageGallery[this.state.activeImageId].image}?nf_resize=smartcrop&w=1300&h=800`} />
          )}
        </Modal>
      </Fragment>

    )

  }

};

export default ImageGallery;
