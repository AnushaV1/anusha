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
	Driven by a relentless curiosity, I'm committed to pushing boundaries
	 and exploring the boundless opportunties within software engineering. I've cultivated my expertise in cloud technologies, leveraging platforms such as AWS and 
	 Azure to create robust and scalable solutions. Whether it's a programming language, cloud technologies, architecting solutions, or infrastructure development, I'm constantly seeking new challenges to expand my horizons.
	 </p><p>Currently, I'm immersed in mastering DevOps methodologies to streamline development processes and enhance deployment efficiency.
	  Through hands-on experience and a thirst for innovation, I continuously strive to push the boundaries of possibilities in the digital realm.
	  </p><p> Outside of coding, I relish spending quality time with my family, listening to soul-stirring melodies, gardening, and seeking serenity through yoga and meditation.
	  </p><p>Through this portfolio, I invite you to delve into my world, explore my works, and witness the passion that fuels my journey. </p>
	</div>
	<div className='right spotlight'><div>	
<div className="image"><img src={anushaImg} alt="Anusha V" /></div>				
<div className='icons'>
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



