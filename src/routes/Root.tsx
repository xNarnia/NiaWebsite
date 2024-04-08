import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation, useOutlet, useOutletContext } from "react-router-dom"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { routes } from "../router"
import { useContext, useState } from "react"
import { NavbarTitleContext, NavbarHiddenContext } from "../app"
import config from "../appconfig.json"
import { Avatar } from "../components/avatar"

function Root() {
    const location = useLocation();
    const currentOutlet = useOutlet();
    const { navbarHidden, setNavbarHidden } = useContext(NavbarHiddenContext);
    const { navbarTitle, setNavbarTitle } = useContext(NavbarTitleContext);
    setNavbarHidden(true);
    
    const [expanded, setExpanded] = useState(false);

    const handleNavbarToggle = () => {
      setExpanded(!expanded);
    };
    const setTitle = () => {
      var pathArray = location.pathname.split("/");
      setNavbarTitle(pathArray[pathArray.length - 1]);
    }

    return (
      <>
        <Navbar expanded={expanded} expand="lg" className="bg-body-tertiary center" style={{ display: navbarHidden ? 'none': '' }}>
          <Container className="navbarContainer">
            <Navbar.Brand><Avatar size={3} /></Navbar.Brand>
            <Navbar.Text id="routeTitle" className="d-lg-none">{navbarTitle}</Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle}/>
            <Container className="navbar-collapse-container">
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  {
                    routes.map(route => (
                      <Nav.Link onClick={handleNavbarToggle} key={route.name} as={Link} to={config.baseUrl + route.path}>{route.icon}{route.name}</Nav.Link>
                    ))
                  }
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Container>
        </Navbar>
        
        <Container className="rootContainer">
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              timeout={300}
              onEnter={setTitle}
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