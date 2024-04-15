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
          User data management, moderation, administration setup/deployment, 
          and administrator panels from the comfort of text channels in 
          Discord to manage server communities and configure other deployed 
          custom software.
          <br />
          <h2>TerrariaChatRelay</h2>
          Cross-compatible player message redirector for TShock & TModLoader.
          Built from the same base, providing compatibility for both with 
          careful choice of patterns and modeling.
          <br />
          <h2>Server Portals</h2>
          Client-side game server redirector to allow seamless transfers from 
          one private server to another.
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Feature-rich, Powerful Bots</h1>
          <ul>
            <li>Ribombot - User Profile & Engagement Bot</li>
            <li>Tyrantron - Configurable, custom bot built to auto-moderate 
              a text community based on configurable filters. Also added custom 
              security features for my own community which required special needs.</li>
            <li>Quilt + Kin - NFT Portfolio Image Generator bot. Able to access the 
              blockchain for a collection, cache collections image + metadata assets. 
              Users can generate collages of their NFT portfolios, or of specific 
              matches on data that matches the metadata of an NFT.</li>
            <li>Ambibot - Text-based chat channel engine for creating custom games 
              where community members can participate together. Generic party 
              recruitment system, lobby organizer, and simplified menu system.</li>
            <li>Delibot - "Tradable present" generator that allowed users to disguise 
              redeemable game codes as text-based presents with descriptive 
              identifiers hinting at what's inside the gift.</li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Collaborative, Open-source Enthusiast</h1>
          <ul>
            <li>
              11 public repos openly available with MIT & GPL-3 licenses.
            </li>
            <li>
              Not afraid to develop openly, with purpose of teaching others and 
              receiving constructive criticism for myself.
            </li>
            <li>
              Developed developer engagement process called code bounties .
            </li>
            <li>
              Development opportunity system where community member can contribute code
              and earn credit to rise in leaderboards for various in-house rewards.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h1>3D Modeling & Sculpting</h1>
          <ul>
            <li>
              Experience working with 3D models in Unreal Engine & Blender.
            </li>
            <li>
              Amateur sculpting with Nomad Sculpt. 
            </li>
            <li>
              Rendering techniques in UE5 and Blender.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Livestreaming & Multimedia Editing</h1>
          Experience broadcasting on Twitch & YouTube with OBS, saving 
          VoDs, and creating an engaged web community through clips, 
          videos, and get together nights. Adobe Premiere Pro and 
          AfterEffects for video manipulation.
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Robotics Team Leader & Engineer</h1>
          <ul>
            <li>
              FIRST Robotics Competition President. 
            </li>
            <li>
              FIRST™️ Robotics President helping build robots for FRC competitions.
            </li>
            <li>
              Leading & motivating students to learn.
            </li>
            <li>
              Spending lots of time crunching to build large robots to 
              accomplish very complicated goals.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Community Owner & Administrator</h1>
          <ul>
            <li>
              Administrator & owner of large online web communities.
              Created & nurtured web community with 2000+ members for the video game Pokémon.
            </li>
              Event + competition organization, custom programmable systems 
              for user engagement, reward + benefit system to attract, keep, 
              and reward members for active + outstanding participation.
            <li>
              Administrator leading group of selected individuals to help with moderation, and more.
            </li>
          </ul>
        </StyledCol>
      </Row>
    </Container>
  </>
} />

export default Portfolio