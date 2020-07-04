import React from 'react';
import { Link } from 'gatsby';

const Navigation = (props) => {

  let activePage = window ? window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') : '';

  return (
    <nav>
      <ol className='navigation'>
        <li className={`navigation__list ${window ? window.location.pathname === '/' ? 'navigation__list-active' : '' : ''}`}>
          <Link onClick={() => props.closeMenu()} to='/'>Home</Link>
        </li>
        <li className={`navigation__list ${activePage === 'recent-work' ? 'navigation__list-active' : ''}`}>
          <Link onClick={() => props.closeMenu()} to='/recent-work'>Recent Work</Link>
        </li>
        <li className={`navigation__list ${activePage === 'family' ? 'navigation__list-active' : ''}`}>
          <Link onClick={() => props.closeMenu()} to='/family'>Family</Link>
        </li>
        <li className={`navigation__list ${activePage === 'portraits' ? 'navigation__list-active' : ''}`}>
          <Link onClick={() => props.closeMenu()} to='/portraits'>Portraits</Link>
        </li>
        <li className={`navigation__list ${activePage === 'weddings' ? 'navigation__list-active' : ''}`}>
          <Link onClick={() => props.closeMenu()} to='/weddings'>Weddings</Link>
        </li>
        <li className={`navigation__list ${activePage === 'about' ? 'navigation__list-active' : ''}`}>
          <Link onClick={() => props.closeMenu()} to='/about'>About</Link>
        </li>
        <li className={`navigation__list ${activePage === 'contact' ? 'navigation__list-active' : ''}`}>
          <Link onClick={() => props.closeMenu()} to='/contact'>Contact</Link>
        </li>
      </ol>
    </nav>
  )
}

export default Navigation;
