import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <Nav fill variant="pills" defaultActiveKey="/" style={{textDecoration:'none'}}>
      <Nav.Item>
        <Nav.Link eventKey="link-1"   >
            <NavLink to='/' style={{textDecoration:'none',color:'black'}}>Home</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
            <NavLink to='/' style={{textDecoration:'none',color:'black'}}>Resume</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
            <NavLink to='project' style={{textDecoration:'none',color:'black'}}>Project</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">
            <NavLink to='/' style={{textDecoration:'none',color:'black'}}>Exprience</NavLink>
        </Nav.Link>
      </Nav.Item>
     
    </Nav>
  );
}

export default Navbar;