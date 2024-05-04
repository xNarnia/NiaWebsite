import NavbarRoute from './templates/NavbarRoute';
import bg from "../img/bg-github.jpg"
import githubImage from "../img/TCR-TerrariaChatRelay.png"
import { Col, Container, Row } from 'react-bootstrap';
import StyledCol from './templates/StyledCol';

const Github = () => <NavbarRoute BackgroundImage={bg} Element={
  <>
    <Container className='resume'>
      <Row>
        <Col lg={3}>
        </Col>
        <StyledCol lg={6} >
          
          <a href='https://github.com/xNarnia'>
            <img src={githubImage} className='rounded img-fluid' />
          </a>
          <div style={{display: 'none'}}>
            <br /><br />
            <div>
              TerrariaChatRelay
            </div>
            <div>
              NFT Image Generator Bot
            </div>
            <div>
              Profile & Entertainment Bot
            </div>
            <div>
              Lootbox Simulator
            </div>
            <div>
              Terraria3DKit
            </div>
            <div>
              Terraria Administration Plugin Fix
            </div>
          </div>
        </StyledCol>
        <Col lg={3}>
        </Col>
      </Row>
    </Container>
  </>
} />

export default Github