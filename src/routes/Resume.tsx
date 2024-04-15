import NavbarRoute from './templates/NavbarRoute';
import bg from '../img/bg-resume.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import StyledCol from './templates/StyledCol';
import '../css/page_resume.css'

const Resume = () => <NavbarRoute BackgroundImage={bg} Element={
  <Container className='resume'>
      <Row>
        <StyledCol lg={12}>
          <h1>Where can I find your resume?</h1>
          Feel free to shoot me a message privately and I will send it to you via e-mail.
        </StyledCol>
      </Row>
    </Container>
} />

export default Resume