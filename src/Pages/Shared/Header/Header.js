import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4 bg-info' expand="lg" variant="light">
            <Container>
            <Nav className="me-auto text-light">
                        <Nav.Link> <img height={'30px'} width='60px' src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" srcset="" /> </Nav.Link>
                        <Nav.Link style={{ color: '#FFF', backgroundColor: "#5C985C", fontWeight: 'bold' }}>Abrar Learning School</Nav.Link>
                        <Nav.Link><Link to='/NavHome' style={{ color: '#FFF'}}>Home</Link></Nav.Link>
                        <Nav.Link><Link style={{ color: '#FFF' }}>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/Blog' style={{ color: '#FFF'}}>Blog</Link></Nav.Link>
                    </Nav>
                <Navbar.Brand><Link to='/' style={{ color: '#FFF', }}>Courses</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' style={{ color: '#FFF', backgroundColor: "#5C985C",}}>|Login| </Link>
                                        <Link to='/register' style={{ color: '#FFF', backgroundColor: "#FF0000" }}> |Register|</Link>
                                    </>
                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;