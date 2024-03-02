import React from 'react';
import '../assets/css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload,faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
		<section id="footer" className='special'>
	<div className='flexSection' style={{marginTop: '10px'}}>
		<div className="subSection" style={{textAlign: 'left'}}>
			<div><FontAwesomeIcon className="social1" icon={faEnvelope} /><span className='content'><strong>anusha.venkataraghavan@gmail.com</strong></span></div>
			<div><FontAwesomeIcon className="social1" icon={faLocationDot} /><span className='content'><strong>Cupertino, California</strong></span></div>


	</div>
	<div className="subSection icons" style={{textAlign:'right'}}>
<a href="http://www.linkedin.com/in/anusha-venkataraghavan" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon className="social" icon={faLinkedin} inverse/></span></a>
<a href="https://github.com/AnushaV1" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon className="social" icon={faGithub} inverse /></span></a>
<a href="./images/Resume_Anusha.pdf" id="resume-download" download="anushav-resume"><span><FontAwesomeIcon className="social" icon={faFileDownload} inverse /></span></a>

	</div>
	</div>
		</section>
    )
}

export default Footer;