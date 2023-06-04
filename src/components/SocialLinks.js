/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './SocialLinks.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const SocialLinks = () => {
	return (
		<div className="header-link">
			<a id="whatsapp" href="#">
				<WhatsAppIcon sx={{ fontSize: 40 }} />{' '}
			</a>
			<a id="youtube" href="#">
				<YouTubeIcon sx={{ fontSize: 40 }} />{' '}
			</a>
			<a id="twitter" href="#">
				<TwitterIcon sx={{ fontSize: 40 }} />{' '}
			</a>
		</div>
	);
};
