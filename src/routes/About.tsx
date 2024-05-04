import NavbarRoute from './templates/NavbarRoute';
import bg from '../img/bg-about.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import StyledCol from './templates/StyledCol';

const About = () => <NavbarRoute BackgroundImage={bg} Element={
  <>
    <Container className='socials'>
      <Row>
        <Col lg={3}>
        </Col>
        <StyledCol lg={6} >
          Soon, there will be more to learn.
        </StyledCol>
        <Col lg={3}>
        </Col>
      </Row>
    </Container>
  </>
} />

export default About