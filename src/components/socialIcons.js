import React from 'react';
import FacebookIcon from '../assets/svg/facebook-icon.inline.svg';
import InstagramIcon from '../assets/svg/instagram-icon.inline.svg';
import EmailIcon from '../assets/svg/email-icon.inline.svg';

const SocialIcons = (
	props
) => {

	const { containerClass } = props

	return (
		<ul className={`${containerClass} social-icons`}>
			{/*
			<li className="social-icons__list-item">
				<a href="#" className="social-icons__anchor"><FacebookIcon className="social-icons__svg" /></a>
			</li>
			*/}
			<li className="social-icons__list-item">
				<a href="https://www.instagram.com/suzannewrightphotographer/" className="social-icons__anchor" target="_blank"><InstagramIcon className="social-icons__svg" /></a>
			</li>
			<li className="social-icons__list-item">
				<a href="mailto:suzanne.wright88@hotmail.com" className="social-icons__anchor" target="_blank"><EmailIcon className="social-icons__email-svg" /></a>
			</li>
		</ul>
	)
}

export default SocialIcons;