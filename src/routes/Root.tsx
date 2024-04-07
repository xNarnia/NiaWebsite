import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation, useOutlet, useOutletContext } from "react-router-dom"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { routes } from "../router"
import { useContext } from "react"
import { NavbarHiddenContext } from "../app"
import config from "../appconfig.json"
import { Avatar } from "../components/avatar"

function Root() {
    const location = useLocation();
    const currentOutlet = useOutlet();
    const { navbarHidden, setNavbarHidden } = useContext(NavbarHiddenContext);
    setNavbarHidden(true);

    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary center" style={{ display: navbarHidden ? 'none': '' }}>
          <Container>
          <Navbar.Brand><Avatar size={3} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              {
                routes.map(route => (
                  <Nav.Link key={route.name} as={Link} to={config.baseUrl + route.path}>{route.name}</Nav.Link>
                ))
              }
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <Container className="rootContainer">
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
                {currentOutlet}
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </>
    )
  }

export default Root