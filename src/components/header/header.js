import React from 'react';
import Navigation from './navigation';
import HamburgerMenu from './hamburgerMenu';
import { connect } from 'react-redux';
import { toggleMenu, closeMenu } from '../../actions/app';
import logo from '../../assets/svg/logo.svg';
import SocialIcons from '../socialIcons'

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
          <h2>Suzanne Wright</h2>
        </header>
        <header className="site-header">
          <div className="site-header__inner">
            <SocialIcons containerClass="site-header__social-icons" />
            <button
              className="site-header__close-btn btn btn--close"
              onClick={this.props.closeMenu}
            >
              X
            </button>
            <h2 className="site-header__title">
              <img src={logo} alt="Suzanne Wright Photographer" />
            </h2>
            <Navigation closeMenu={(this.props.closeMenu)} />
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
