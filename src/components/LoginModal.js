import React, {useState} from 'react';

import "../css/LoginModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faApple} from "@fortawesome/free-brands-svg-icons/faApple";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Email from "./Email";
import {emailAddress, login} from "../actions/actions";
import {connect} from "react-redux";

function LoginModal(props) {
    const [emailArea, showArea] = useState(false);

    const enableArea = () => {
        showArea(true);
    }
    const clickLogin = () => {
        props.login(true);
        props.handleLogin();
    }
    return (
        <>{!props.loggedIn ?
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title style={{cursor: "pointer"}} onClick={props.handleClose}>
                        <FontAwesomeIcon icon={faTimesCircle} size="lg"/>
                    </Modal.Title>

                    <Modal.Title style={{marginRight: "auto", marginLeft: "auto"}}>Login to RestoEat</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Card>
                        <ListGroup className={"loginCard"} variant="flush">
                            <ListGroup.Item className={"loginWith"}>
                                <FontAwesomeIcon icon={faGoogle} size="lg"
                                                 style={{marginRight: "10px", marginLeft: "auto"}}/>
                                <div className={"continueWith"} onClick={()=>clickLogin()}>CONTINUE WITH GOOGLE</div>
                            </ListGroup.Item>
                            <ListGroup.Item className={"loginWith"}>
                                <FontAwesomeIcon icon={faFacebook} size="lg"
                                                 style={{marginRight: "10px", marginLeft: "auto"}}/>
                                <div className={"continueWith"} onClick={()=>clickLogin()}>CONTINUE WITH FACEBOOK</div>
                            </ListGroup.Item>
                            <ListGroup.Item className={"loginWith"}>
                                <FontAwesomeIcon icon={faApple} size="lg"
                                                 style={{marginRight: "10px", marginLeft: "auto"}}/>
                                <div className={"continueWith"} onClick={()=>clickLogin()}>CONTINUE WITH APPLE</div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <div className={"or"}>
                        OR
                    </div>
                    {!emailArea ? <Button variant="primary" style={{width: "100%"}} onClick={() => enableArea()}>

                            CONTINUE WITH EMAIL
                        </Button> :
                        <Email/>
                    }
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" style={{width: "100%"}} onClick={()=>clickLogin()}>

                        LOGIN
                    </Button>
                </Modal.Footer>
            </Modal> : <></>
        }</>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        login: (item) => {
            dispatch(login(item))
        },

    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
