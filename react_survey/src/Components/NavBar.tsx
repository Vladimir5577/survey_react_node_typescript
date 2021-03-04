import { Navbar, Nav } from 'react-bootstrap';

const NavBar: React.FC = () => {
	return (
		<Navbar bg="dark" variant="dark">
		    <Navbar.Brand href="#home">Covid survey</Navbar.Brand>
		    <Nav className="mr-auto">
{/*		      <Nav.Link >Home</Nav.Link>
		      <Nav.Link >Features</Nav.Link>
		      <Nav.Link >Pricing</Nav.Link>*/}
		    </Nav>
		  </Navbar>

	);
};

export default NavBar;