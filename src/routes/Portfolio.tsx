import NavbarRoute from './templates/NavbarRoute';
import bg from "../img/bg-portfolio.jpg"
import '../css/page_portfolio.css'
import { Grid } from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap';
import StyledCol from './templates/StyledCol';

const Portfolio = () => <NavbarRoute BackgroundImage={bg} Element={
  <>
    <Container className='portfolio'>
      <Row>
        <StyledCol lg={6}>
          <h1>SaaS Development, <br className='d-none d-sm-none d-md-block' /> Delivery, & Testing</h1>
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
                  <li>Mongo DB</li>
                  <li>SQLite</li>
                </ul>
              </Col>
              <Col xs={6}>
                <h3>Server/Backend:</h3>
                <ul>
                  <li>ASP.NET Core</li>
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
                </ul>
              </Col>
            </Row>
          </Container>
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Server-oriented Software &  Modifications</h1>
          Discord server management software, & 
          game mod plugin development for enhancing 
          private server community engagement & administration.
          <br />
          <h2>Discord Bot Admin Panels & Moderation</h2>
          User data management, moderation, administration setup/deployment, and administrator panels from the comfort of text channels in Discord to manage server communities and configure other deployed custom software
          <br />
          <h2>TerrariaChatRelay</h2>
          Cross-compatible player message redirector for TShock & TModLoader. Built from the same base, providing compatibility for both using the Adapter pattern
          <br />
          <h2>Server Portals</h2>
          Client-side game server redirector to allow seamless transfers from one private server to another.
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Feature-rich, Powerful Bots</h1>
          <ul>
            <li>Ribombot - User Profile & Engagement Bot</li>
            <li>Tyrantron - Server Auto-Moderation Bot</li>
            <li>Quilt + Kin - NFT Portfolio Image Generator</li>
            <li>Ambibot - Discord Chat-based Game Bot</li>
            <li>Delibot - Tradable "Present" Generator for Game Key Codes</li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Collaborative, Open-source Enthusiast</h1>
          Discord with bounty system, open-source repos, & more
        </StyledCol>
        <StyledCol lg={6}>
          <h1>3D Modeling & Sculpting</h1>
          Images of 3D works here, Nomad Sculpt, Blender, 
          Autodesk 3DS Max, Unreal Engine
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Livestreaming & Multimedia Editing</h1>
          Twitch, Davinci Resolve, Adobe Premeire Pro
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Robotics Team Leader & Engineer</h1>
          FIRST Robotics Competition President. 
          Software Engineering, CAD, Electrical Engineering
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Community Owner & Administrator</h1>
          Discord server community manager of over 2,000 people, built from scratch.
        </StyledCol>
      </Row>
    </Container>
  </>
} />

export default Portfolio