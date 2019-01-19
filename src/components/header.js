import React from "React";
import Navigation from "./navigation";
import HamburgerMenu from "./hamburgerMenu";
import { connect } from "react-redux";
import { openMenu, toggleMenu } from "../actions/app";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerMenuOpen: false
    };

    this.openHamburgerMenu = this.openHamburgerMenu.bind(this);
  }

  componentDidMount() {
    //document.querySelector("html").classList.add("menu-open");
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
          <h2 className="site-header__title">Suzanne Wright</h2>
          <Navigation />
        </header>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { toggleMenu: () => dispatch(toggleMenu()) };
};

const VisibleHeader = connect(
  null,
  mapDispatchToProps
)(Header);

export default VisibleHeader;
