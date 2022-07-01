import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (<Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src="https://img.freepik.com/free-vector/cloud-icon-cartoon-sky-symbol-cute-fluffy_543062-124.jpg?w=2000"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Link to='/'>Home</Link>
        </Container>
    </Navbar>)
}
export default NavBar