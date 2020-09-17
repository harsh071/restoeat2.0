import React from 'react';
import NavbarApp from "./NavbarApp";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom";
import {faAngleDoubleUp,faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../css/Home.css";

function Home() {
    const scrooll = () =>{
        window.scroll({
            top: 800,
            behavior: 'smooth'
        });
    }
    return (
        <div className="App">
            <NavbarApp/>
            <div className="LandingScreen">

                <Jumbotron className={"imagetron"} >
                    <h1 style={{textShadow:"5px 5px black",fontSize:"50px",margin:"20px"}}>You Deserve Great Food</h1>
                    <p style={{marginTop:"100px"}}>
                        <Link to={"Menu"}>
                            <Button  variant="dark" style={{height: "50px", width: "100px", fontSize:"20px",borderColor:"white",borderRadius:"10px"}}>MENU</Button>
                        </Link>
                    </p>
                </Jumbotron>
                <div className={"scroll"} onClick={scrooll.bind(this)} style={{marginTop: "35px"}}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" style={{margin: "auto"}}/></div>
                <Jumbotron fluid style={{fontSize:"20px",display:"flex",flexDirection:"column",justifyContent:"space-around", height: "100%", margin: '0px 100px 10px 100px ', background: "white"}}>

                    <h1>More Choice</h1>
                    <p>We have thousands of restaurants, including local favorites that don't normally deliver. Discover
                        new cuisines all around you.
                    </p>
                    <h1>Smarter Delivery</h1>
                    <p>Watch your order from the moment you place it until the food is at your door. Transparency.
                        Welcome to the future.
                    </p>
                    <h1>Gain Time</h1>
                    <p>Life can be complicated but ordering food doesn't have to be. Let us take care of the details
                        while you focus on what really matters.
                    </p>
                    <p>
                        <Button variant="dark" style={{height: "50px", width: "150px", fontSize:"20px"}}>Learn more</Button>
                    </p>
                </Jumbotron>
                <Jumbotron fluid style={{height: "fit-content", margin: 0, background: "black", color: "white"}}>
                    <h1>Popular Cuisines</h1>
                    <Carousel style={{margin: "100px "}}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/noodle-food-menu-asian-thailand-bowl-tasty-delicious-cooking.jpg"
                                style={{maxWidth:"100%",borderRadius:"20px"}}
                                alt={"indian"}
                            />
                            <Carousel.Caption>
                                <h3>Chinese Cuisine</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/indian-food-2951094_1280.jpg"
                                style={{maxWidth:"100%",borderRadius:"20px"}}
                                alt={"indian"}
                            />

                            <Carousel.Caption>
                                <h3>Indian Cuisine</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/burger-food-plate-hamburger.jpg"
                                alt="Third slide"
                                style={{maxWidth:"100%",borderRadius:"20px"}}
                            />

                            <Carousel.Caption>
                                <h3>Burgers</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Jumbotron>
            </div>
        </div>
    );
}

export default Home;
