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
import AddressModal from "./AddressModal";
import { useLocation } from 'react-router-dom'

function NavbarApp(props) {
    const [show, setShow] = useState(false);
    const [showAddress, setAddressShow] = useState(false);
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
    const clickAddress = () => {
        setAddressShow(true);
    }

    const handleAddressClose = () => {
        setAddressShow(false);
    }
    const location = useLocation();
    console.log(location.pathname!=="/receipt")

    return (
        <div>
            {location.pathname !== "/receipt" && <Navbar expand="lg" variant={"dark"} style={{backgroundColor:"black"}}>

                <Link to={'/'}><Navbar.Brand style={{backgroundColor:"black"}}>RestoEAT</Navbar.Brand></Link>


                <Navbar.Collapse id="basic-navbar-nav">
                    {!props.disabled ? <>
                            <Nav style={{backgroundColor:"black", borderLeft:"1px solid white"}} className="mr-auto">
                                <Navbar.Text style={{margin:"0px 8px"}}>
                                    <Link to={"/Menu"}>
                                        <>Menu</>
                                    </Link>
                                </Navbar.Text>
                            </Nav>
                            <Nav style={{backgroundColor:"black", borderLeft:"1px solid white"}} className="mr-auto">
                                <Navbar.Text style={{margin:"0px 8px"}}>
                                    <Link to={"/OrderHistory"}>
                                        <>Order     History</>
                                    </Link>
                                </Navbar.Text>
                            </Nav>
                            {!loggedIn ? <Navbar.Text style={{color:"white",cursor: "pointer",paddingTop:"0px",paddingBottom:"0px",paddingLeft: "15px",paddingRight: "15px",borderLeft:"1px solid white"}} onClick={() => clickAddress()}>
                                <div style={{ padding:" 05px 12px", borderRadius:"10px"}}>Select Address.</div>
                            </Navbar.Text> : <></>}
                            <Nav style={{backgroundColor:"black",borderLeft:"1px solid white",borderRight:"1px solid white"}} className="mr-auto">
                                <NavDropdown menuRole="menu" title={ <Navbar.Text style={{padding:"0px",height:"0px",color:"white"}}>ADMIN</Navbar.Text>} id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to={"/Inventory"}>
                                        <>Inventory</>
                                    </Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to={"/SalesTrend"}>
                                        <>Sales Trend</>
                                    </Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </>
                        : <div></div>}
                    <Navbar.Collapse className="justify-content-end">
                        {!loggedIn ? <Navbar.Text style={{color:"white",cursor: "pointer",paddingTop:"0px",paddingBottom:"0px",paddingLeft: "15px",paddingRight: "15px",borderLeft:"1px solid white"}} onClick={() => clickLogin()}>
                            <div style={{ padding:" 05px 12px", borderRadius:"10px"}}>Login.</div>
                        </Navbar.Text> : <></>}
                        <Navbar.Text style={{paddingLeft: "15px", borderLeft:"1px solid white"}}>
                            <Link to={"/Payment"}>
                                <>View Cart</>
                            </Link>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>}
            {location.pathname !== "/receipt" &&<LoginModal show={show} handleClose={handleClose} handleLogin={handleLogin}/>}
            {location.pathname !== "/receipt" && <AddressModal show={showAddress} handleClose={handleAddressClose}/>}
        </div>
    );
}

export default NavbarApp;
