import React from 'react';
import Navigation from './navigation';
import HamburgerMenu from './hamburgerMenu';
import { connect } from 'react-redux';
import { toggleMenu, closeMenu } from '../../actions/app';
import logo from '../../assets/svg/logo.svg';
import SocialIcons from '../socialIcons';
import CloseIcon from '../../assets/svg/close-icon.inline.svg';
import { Link } from "gatsby";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerMenuOpen: false
    };

    this.openHamburgerMenu = this.openHamburgerMenu.bind(this);
    this.htmlElement = "";
  }

  componentDidMount() {
    this.htmlElement = document.querySelector("html");
  }

  componentDidUpdate() {
    if (this.htmlElement && this.props.menuOpen === true) {
      this.htmlElement.classList.add("menu-open");
    } else {
      this.htmlElement.classList.remove("menu-open");
    }
  }

  openHamburgerMenu() {
    this.props.toggleMenu();
  }

  render() {
    return (
      <React.Fragment>
        <header className="mobile-header">
          <HamburgerMenu openMenu={this.openHamburgerMenu} />

          <Link
            to="/"
            className="mobile-header__title"
          >
            <img className="mobile-header__logo" src={logo} alt="Suzanne Wright Photographer" />
          </Link>

        </header>
        <header className="site-header">
          <div className="site-header__inner">
            <SocialIcons containerClass="site-header__social-icons" />
            <button
              className="site-header__close-btn btn btn--close"
              onClick={this.props.closeMenu}
            >
              <CloseIcon />
            </button>
            <h2 className="site-header__title">
              <Link to="/" className="site-header__logo">
                <img src={logo} alt="Suzanne Wright Photographer" />
              </Link>
            </h2>
            <div className="site-container">

              {this.props.hideNav ? (
                ''
              ) : (
                <Navigation closeMenu={(this.props.closeMenu)} />
              )}
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menuOpen: state.app.menuOpen
});

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
    closeMenu: () => dispatch(closeMenu())
  };
};

const VisibleHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default VisibleHeader;
