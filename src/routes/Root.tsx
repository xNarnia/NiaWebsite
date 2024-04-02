import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation, useOutlet } from "react-router-dom"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { routes } from "../router"

function Root() {
    const location = useLocation()
    const currentOutlet = useOutlet()
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary hidden">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                {
                    routes.map(route => (
                    <Nav.Link as={Link} to={route.path}>{route.name}</Nav.Link>
                    ))
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <Container className="container">
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
                <div className="page">
                  {currentOutlet}
                </div>
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </>
    )
  }

export default Root