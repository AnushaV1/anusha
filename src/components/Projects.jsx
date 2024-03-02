import React from 'react';
import InventoryLogo from '../../src/assets/images/homeInventoryLogo.jpg';
import BookStack from '../../src/assets/images/book-stack.jpg';
import JoblyImg from '../../src/assets/images/Jobly.PNG';
import MemeGeneratorImg from '../../src/assets/images/MemeGenerator.PNG';
import '../assets/css/Project.css';
const Projects = () => {
    return (
        <section id="second" className="special">
            <header className="major">
                <h2>Projects</h2>
            </header>
            <ul className="features">
                <li>
                    <span className="icon major style1"><a href="https://github.com/AnushaV1/Inventory-frontend" target="_blank" rel="noreferrer"><img src={InventoryLogo} alt="Inventory" /></a></span>
                    <h3>Home Inventory</h3>
                    <p>An Insurance claim application</p>
                    React, Redux, Formik, Yup, Axios, Node, Express, Multer, PostgreSQL, Bcrypt,JWT, REST API
                </li>
                <li>
                    <span className="icon major style2"><a href="https://github.com/AnushaV1/mycollege" target="_blank" rel="noreferrer"><img src={BookStack} alt="My college" /></a></span>
                    <h3>My College</h3>
                    <p>College shortlisting application</p>
                    HTML, JQuery, Bootstrap, Python3, PostgreSQL, SQLAlchemy, Jinja, WTForms, REST API
                </li>
                <li>
                    <span className="icon major style3"><a href="https://anusha-jobly.netlify.app/" target="_blank" rel="noreferrer"><img src={JoblyImg} alt="Jobly" /></a></span>
                    <h3>Jobly</h3>
                    <p>A Mock Job search Website</p>
                    React, Node, Express, Axios, PostgreSQL, JWT
                </li>
                <li>
                    <span className="icon major style4"><a href="https://anushav1.github.io/Redux-memegenerator/" target="_blank" rel="noreferrer"><img src={MemeGeneratorImg} alt="Meme Generator" /></a></span>
                    <h3>Meme Generator</h3>
                    <p>React, Redux</p>
                </li>             
            </ul>
            </section>
    )
}

export default Projects;