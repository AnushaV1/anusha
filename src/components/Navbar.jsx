import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faCertificate, faAward,faUserGraduate,faGripVertical,faList,faFileAlt,faHome, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav id="nav">
						<ul>
							<li><a href="#intro" className="active"><span><FontAwesomeIcon icon={faHome} /> About Me</span></a></li>
							<li><a href="#first"><span><FontAwesomeIcon icon={faList} /> Skills</span></a></li>
							<li><a href="#second"><span><FontAwesomeIcon icon={faGripVertical} /> Projects</span></a></li>
							<li><a href="#third"><span><FontAwesomeIcon icon={faCertificate} /> Certificates</span></a></li>
							<li><a href="#fourth"><span><FontAwesomeIcon icon={faFileAlt} /> Experience</span></a></li>
							<li><a href="#fifth"><span><FontAwesomeIcon icon={faAward} /> Awards </span></a></li>
							<li><a href="#sixth"><span><FontAwesomeIcon icon={faUserGraduate} /> Education </span></a></li>
							<li><a href="#seventh"><span><FontAwesomeIcon icon={faHandshakeAngle} /> Volunteering</span></a></li>
							<li><a href="#footer"><span><FontAwesomeIcon icon={faEnvelope} /> Contact</span></a></li>
						</ul>
					</nav>
    )
}
export default Navbar;