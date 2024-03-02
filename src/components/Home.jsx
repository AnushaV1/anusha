import React from 'react';
import anushaImg from '../assets/images/Anusha_V.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
	<section id="intro" className="special separator">
	<header className="major"><h2>About Me</h2></header>
	<div  className="intro-container">
	<div className='left'>
<p>Welcome to my portfolio! I'm a passionate Software Engineer specializing in full stack web development.
	My journey in software engineering has been marked by a pursuit of knowledge.
	Fueled by unyielding curiosity, I'm dedicated to exploring the endless possibilities within software engineering, refining my expertise in cloud technologies like AWS and Azure to deliver robust and scalable solutions through hands-on experience. Whether mastering a new programming language, architecting innovative solutions, or developing infrastructure, I relentlessly pursue new challenges to broaden my horizons.
	 </p><p>Currently, I'm immersed in mastering DevOps methodologies to streamline development processes and enhance deployment efficiency.
	   </p><p> Outside of coding, I relish spending quality time with my family, listening to soul-stirring melodies, gardening, and seeking serenity through yoga and meditation.
	  </p><p>Through this portfolio, I invite you to delve into my world, explore my works, and witness the passion that fuels my journey. </p>
	</div>
	<div className='right spotlight'><div>	
<div className="image"><img src={anushaImg} alt="Anusha V" /></div>				
<div className='icons' style={{marginLeft:'55px'}}>
<a href="http://www.linkedin.com/in/anusha-venkataraghavan" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon className="social" icon={faLinkedin} inverse/></span></a>
<a href="https://github.com/AnushaV1" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon className="social" icon={faGithub} inverse /></span></a>
<a href="./images/Resume_Anusha.pdf" id="resume-download" download="anushav-resume"><span><FontAwesomeIcon className="social" icon={faFileDownload} inverse /></span></a>
</div>
</div>
	</div>
	</div>
	</section>  
    )
}

export default Home;



