import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';

const Experience = () => {
    return (
        <section id="fourth" className="special separator">
        <header className="major">
            <h2>Work Experience</h2>									
        </header>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>
             <FontAwesomeIcon icon={faCheck} className="icon"/><strong>Cloud Architect and Software Engineer, The Citizen Project, Remote  :     Dec 2023 - Present  </strong>
           </Accordion.Header>
        <Accordion.Body>
		<p><FontAwesomeIcon icon={faCheck} className="icon"/> <span> Leading the design and implementation of cloud-based solutions using AWS services for a non-profit organization.</span>
		<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Architecting solution for alert email notification systems using Amazon SES, SNS, IAM, DynamoDB, Lambda, CloudWatch, and AppSync.</span>
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Conducting AWS Amplify prototyping and fostering seamless integration of front-end and back-end environments through collaborative developer engagement.</span>
							
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/>Developing a quality-of-life web and mobile application for a non-profit organization using React micro-frontend.<span>

								</span>
								
</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><FontAwesomeIcon icon={faCheck} className="icon"/><strong><span className='spacer'>Senior Software Engineer,  Liberty Mutual Insurance, Remote  :    July 2021 - November 2022 </span></strong></Accordion.Header>
        <Accordion.Body>
        <p>
		<FontAwesomeIcon icon={faCheck} className="icon"/> <span>Managed over five single-page applications, enabling seamless interaction with multiple APIs and databases within the IT service management team and ensuring smooth operations and efficient data handling.</span>
		<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Improved service management applications and user experience by executing frontend UI initiatives, implementing new cutting-edge features, and crafting reusable custom components using React libraries and Redux state management.</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Directed successful upgrade of React, Webpack, Babel, Bootstrap, and testing packages for large-scale incident management applications, including 15K lines of code changes, which optimized performance and functionality.</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Boosted application stability and reliability by conducting component testing with Enzyme and automating test cases using Mocha, Chai, Sinon, and Jest.</span>								
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span> Supported customers with full regression testing in production</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Designed and employed comprehensive unit test plans, test cases, and detailed test reports for applications for robust quality assurance.</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Diagnosed and resolved issues in Java applications and Python APIs by leveraging strong problem-solving skills and technical expertise.								</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Triaged and resolved on-call production escalations using Splunk logs for debugging and data monitoring. 							</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Collaborated with customers and cross-functional teams to collate new requirements. </span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Contributed to Agile and Scrum methodologies, participating in iteration planning meetings, daily team standups, retrospectives, and backlog refinement sessions to align team efforts with project goals.</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Evaluated and customized PowerBI reports and filters for internal customers, improving data visualization and facilitating informed decision-making.</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>On-boarded and guided junior engineers and explained complex code structures/application architectures to foster collaborative and knowledge-sharing environments.</span>
				<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Prepared internal architecture diagrams for applications using Lucid Charts to visualize data flow between Microservices and used Figma and Balsamiq to craft wireframing designs to aid in a comprehensive understanding of design intricacies.</span>
		</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><FontAwesomeIcon icon={faCheck} className="icon"/><strong><span className='spacer'>React Developer, Kurious365, Remote  : February 2021 - March 2021 </span> </strong></Accordion.Header>
        <Accordion.Body>
        <p>
			<FontAwesomeIcon icon={faCheck} className="icon"/><span>Developed and initiated innovative features for web-based solutions tailored for educational institutions and elevated the platform's functionality and user engagement by collaborating with senior management.</span>
			<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Built independent React standalone & custom reusable components using React JS, Formik, Yup validation with React Components Library, and Material UI.</span>
			<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Identified and addressed cross-browser compatibility issues in Firefox and IE 8, IE 9, and various bugs for seamless user experience across browsers.</span>
			<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Leveraged Git version control, and node package manager and applied functional programming principles that increased the efficiency and maintainability of React applications.								</span>								
	
								</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" >
        <Accordion.Header><FontAwesomeIcon icon={faCheck} className="icon"/><strong><span className='spacer'>Co-founder and Software Engineer, Impelect Technology Services Pvt Ltd, India : January 2009 - March 2016</span></strong></Accordion.Header>
        <Accordion.Body>			
			 <p>
			<FontAwesomeIcon icon={faCheck} className="icon"/><span>Responsible for all technical interactions with customers on project requirements, project proposals, project planning, and project deliverables</span>
			<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Enabled a pool of returning customers with a retention rate of 30% resulting in a gradual revenue increase from 3000 USD in 2009 to nearly 55,000 USD in 2015.</span>
<br/><FontAwesomeIcon icon={faCheck} className="icon"/><span>Analyzed business requirements, created prototype mockups, and designed new applications for clients</span>
<br /><FontAwesomeIcon icon={faCheck} className="icon"/> <span>Created diverse applications including eCommerce, college application management, and retail marketing sites using HTML, CSS, JavaScript, jQuery, REST API, WordPress, and LAMP stack.</span>
					<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Established strong communication with clients to understand project requirements and drive accurate translation of business needs into technical solutions.</span>
					<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span> Hands-on experience creating responsive customer-facing front-end user interfaces and engaged in all phases of the Software Development Life cycle (SDLC).</span>
					<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Led successful integration of third-party APIs and payment gateways into web applications.</span>
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Spearheaded end-to-end application testing and documentation efforts while maintaining high coding standards and ensuring optimal code optimization.</span>
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Organized and steered code review meetings to drive code optimization and determine high coding standards.</span>
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Trained and directed a team of six developers, cultivating a collaborative and knowledge-sharing team and enhancing overall team productivity.</span>
							</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><FontAwesomeIcon icon={faCheck} className="icon"/><strong><span className='spacer'>Freelance Web Developer, Guru.com, India : June 2008 - December 2008</span></strong></Accordion.Header>
        <Accordion.Body>
        <p><FontAwesomeIcon icon={faCheck} className="icon"/> <span>Corresponded with clients on project requirements, deliverables, time, and cost estimations.</span>
			<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Developed web applications using HTML, CSS, JQuery, PHP, and MySQL according to the business needs and created Restful web services for implementing business operations.</span>
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Written efficient business logic code and developed MySQL databases.	</span>
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Performed end-to-end application testing, documented test results, and maintained applications</span>
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span> Successfully delivered projects on time and supported clients with hosting services
								</span></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><FontAwesomeIcon icon={faCheck} className="icon"/><strong><span className='spacer'>Web Developer, Ripple Soft Systems, India : December 2006 - May 2008 </span></strong></Accordion.Header>
        <Accordion.Body>
        <p><FontAwesomeIcon icon={faCheck} className="icon"/><span>Built web applications using HTML, CSS, JavaScript, JQuery, PHP, and MySQL.</span>
									<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Developed a fully functional classifieds event management portal with a backend custom content management system.</span>
								<br /><FontAwesomeIcon icon={faCheck} className="icon"/><span>Analyzed existing applications, debugged and fixed the defects.</span>
										</p>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </section>	

    )
}
export default Experience;