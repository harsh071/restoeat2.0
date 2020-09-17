import React, {useState} from 'react';
import '../css/NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import LoginModal from "./LoginModal";

function NavbarApp(props) {
    const [show, setShow] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleLogin = () => {

        setShow(false);
        setLoggedIn(true);
    }
    const clickLogin = () => {
        setShow(true);
    }

    return (
        <div>
            <Navbar expand="lg" variant={"dark"} style={{backgroundColor:"black"}}>

                <Link to={'/'}><Navbar.Brand style={{backgroundColor:"black"}}>Dharti's International chicken</Navbar.Brand></Link>


                <Navbar.Collapse id="basic-navbar-nav">
                    {!props.disabled ? <>
                            <Nav style={{backgroundColor:"black", borderLeft:"1px solid white"}} className="mr-auto">
                                <Navbar.Text style={{margin:"0px 8px"}}>
                                    <Link to={"/Menu"}>
                                        <a>Menu</a>
                                    </Link>
                                </Navbar.Text>
                            </Nav>
                            <Nav style={{backgroundColor:"black",color:"white",borderLeft:"1px solid white",width:"fit-content"}} className="mr-auto">
                                <NavDropdown style={{margin:"0px",backgroundColor:"black",color:"white"}}  title={ <Navbar.Text style={{padding:"0px",height:"0px",color:"white"}}>Select Method</Navbar.Text>} id="basic-nav-dropdown">
                                    <NavDropdown.Item >Pickup/Delivery</NavDropdown.Item>

                                    <NavDropdown.Item >Reserve Table</NavDropdown.Item>
                                </NavDropdown>

                            </Nav>

                            <Nav style={{backgroundColor:"black",borderLeft:"1px solid white",borderRight:"1px solid white"}} className="mr-auto">
                                <NavDropdown menuRole="menu" title={ <Navbar.Text style={{padding:"0px",height:"0px",color:"white"}}>Need Help?</Navbar.Text>} id="basic-nav-dropdown">
                                    <NavDropdown.Item>Call Support</NavDropdown.Item>
                                    <NavDropdown.Item>Email Support</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </>
                        : <div></div>}
                    <Navbar.Collapse className="justify-content-end">
                        {!loggedIn ? <Navbar.Text style={{color:"white",cursor: "pointer",paddingTop:"0px",paddingBottom:"0px",paddingLeft: "15px",paddingRight: "15px",borderLeft:"1px solid white"}} onClick={() => clickLogin()}>
                            <div style={{ padding:" 05px 12px",borderLeft:"1px solid white",boxShadow:"2px 2px #F5DEB3", borderRadius:"10px"}}>Login.</div>
                        </Navbar.Text> : <></>}
                        <Navbar.Text style={{paddingLeft: "15px", borderLeft:"1px solid white"}}>
                            <Link to={"/Payment"}>
                                <a>View Cart</a>
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>
            <LoginModal show={show} handleClose={handleClose} handleLogin={handleLogin}/>
        </div>
    );
}

export default NavbarApp;
