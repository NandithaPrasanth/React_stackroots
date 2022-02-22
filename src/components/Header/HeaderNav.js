import React, { useContext } from 'react'
import { Nav, Navbar, Container, button } from 'react-bootstrap'
import { AuthContext, FirebaseContext } from '../../store/context';
import './Header.css';
import { useNavigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
// import Login from '../Login/Login'
// import Signup from '../SignUp/Signup'


function HeaderNav() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { firebase } = useContext(FirebaseContext)

    return (

        <div className='navbar '>
            <Navbar bg="dark" variant="dark" className='navBar navbar-inverse navbar-fixed-top'>
                <Container>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Navbar.Brand href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGY5EJSnQHOLAqUrLHD64Zkz9dXcVHQ4VDQ&usqp=CAU">My own website</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/login"} ><div className="loginPage">
                            <span>{user ? `Welcome ${user.displayName}` : 'Login'}</span>
                            <hr />

                        </div>
                            {user && <span onClick={() => {
                                firebase.auth().signOut()
                                navigate('/login')
                            }}>Logout</span>}
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/signup"}>Sign-Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default HeaderNav