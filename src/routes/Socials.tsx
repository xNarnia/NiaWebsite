import NavbarRoute from './templates/NavbarRoute';
import bg from '../img/bg-socials.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import StyledCol from './templates/StyledCol';
import "../css/page_socials.css"
import icon_Discord from '../img/discord.svg'
import icon_Twitter from '../img/twitter.svg'

const Socials = () => <NavbarRoute BackgroundImage={bg} Element={
  <>
    <Container className='socials'>
      <Row>
        <Col lg={3}>
        </Col>
        <StyledCol lg={6} >
          <a href='https://discord.gg/xAQGT4VetN'><img src={icon_Discord}></img></a>
          <a href='https://twitter.com/MizzNarnia'><img src={icon_Twitter}></img></a>
        </StyledCol>
        <Col lg={3}>
        </Col>
      </Row>
    </Container>
  </>
} />

export default Socials