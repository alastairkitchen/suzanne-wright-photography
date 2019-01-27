import React from "React";
import Navigation from "./navigation";
import HamburgerMenu from "./hamburgerMenu";
import { connect } from "react-redux";
import { toggleMenu, closeMenu } from "../actions/app";

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
        <div
          className="mobile-header__close-bg"
          onClick={this.props.closeMenu}
        />
        <header className="site-header">
          <h2 className="site-header__title">Suzanne Wright</h2>
          <Navigation />
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
