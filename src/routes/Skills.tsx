import NavbarRoute from './templates/NavbarRoute';
import bg from '../img/bg-skills.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import StyledCol from './templates/StyledCol';

const Skills = () => <NavbarRoute BackgroundImage={bg} Element={
  <Container className='skills'>
      <Row>
        <StyledCol lg={12}>
          <h1>SaaS Development, Delivery,<br className='d-none d-sm-none d-md-block' /> Testing, & Administration</h1>
          Experience in SaaS design & development, both monolithic & microservice style architecture. 
          Wide variety of experience across different languages and technologies. 
          <br /><br />
          <Container className='portfolioContainer'>
            <Row>
              <Col xs={6}>
                <h3>Databases:</h3>
                <ul>
                  <li>Microsoft SQL Server</li>
                  <li>MySQL</li>
                  <li>Oracle</li>
                  <li>SQLite</li>
                </ul>
              </Col>
              <Col xs={6}>
                <h3>Server/Backend:</h3>
                <ul>
                  <li>ASP.NET Core MVC</li>
                  <li>Spring Boot</li>
                  <li>Node.js</li>
                </ul>
              </Col>
              <Col xs={6}>
                <h3>Frontend:</h3>
                <ul>
                  <li>React JS w/ TypeScript</li>
                  <li>Bootstrap</li>
                  <li>HTML5 + Canvas</li>
                  <li>three.js</li>
                </ul>
              </Col>
              <Col xs={6}>
                <h3>Testing:</h3>
                <ul>
                  <li>Selenium</li>
                  <li>Mocha.js + Chai.js</li>
                  <li>NUnit / JUnit</li>
                  <li>Automation Framework Design</li>
                </ul>
              </Col>
              <Col xs={6}>
                <h3>Development:</h3>
                <ul>
                  <li>UX / Accessibility Design</li>
                  <li>SaaS Design</li>
                  <li>Mobile Development</li>
                </ul>
              </Col>
              <Col xs={6}>
                <h3>Special:</h3>
                <ul>
                  <li>Bilingual - English, Spanish</li>
                  <li>Multimedia - Image / Video Media Design</li>
                  <li>Community - Open-source teams, Discord administration</li>
                </ul>
              </Col>
              <Col xs={6}>
                <h3>Other:</h3>
                <ul>
                  <li>Linux - Bash / Scripting</li>
                  <li>AGILE - Sprint / Kanban</li>
                  <li>Servers - IIS / GIT / SVN</li>
                  <li>Server Mgmt - AWS EC2 Setup / Mgmt.</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </StyledCol>
      </Row>
    </Container>
} />

export default Skills