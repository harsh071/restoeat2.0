import React from 'react';
import "../css/Payment.css";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deliveryAddress, emailAddress} from "../actions/actions"
import Checkout from "./Checkout";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import NavbarApp from "./NavbarApp";

function Payment(props) {
    const addInfo = (event) => {
        // Do nothing.

    }

    return (<>
            <NavbarApp disabled={true}/>
            <div className={"paymentContainer"} >
            <Link to={"Menu"} style={{marginBottom: "100px"}}>
                <Button variant="primary" type="submit">
                    Back
                </Button>
            </Link>
            <div style={{display: "grid", gridTemplateColumns: "70% auto", marginTop: '20px',marginRight:"10px"}}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder={props.email.length === 0 ? 'Enter Email' : props.email}
                                      onChange={(event) => {
                                          props.emailAddress(event.target.value)
                                      }}/>

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Delivery Address</Form.Label>
                        <Form.Control type="text" placeholder={props.email.length === 0 ? 'Enter Delivery Address' : props.deliveryAddress}
                                      onChange={(event) => {
                                          props.deliveryAddress(event.target.value)
                                      }}
                        />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control type="password" placeholder="Credit Card Number"/>
                    </Form.Group>
                    <Link to={"receipt"}>
                        <Button variant="primary" type="submit" onClick={addInfo} disabled={props.cart.length === 0 || !props.email.length > 0 || !props.deliveryAddress.length > 0 }>
                            Pay
                        </Button>
                    </Link>
                </Form>
                <div style={{marginTop: "20px", borderLeft:"11px"}}>
                    <Checkout payment={true} />

                </div>

            </div>
        </div></>
    );
}

function mapStateToProps(state) {
    return {
        email: state.cartReducer.email,
        deliveryAddress: state.cartReducer.delivery_address,
        cart: state.cartReducer.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        emailAddress: (item) => {
            dispatch(emailAddress(item))
        },
        deliveryAddress: (item) => {
            dispatch(deliveryAddress(item))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
