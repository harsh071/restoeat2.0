import React, {useState} from 'react';
import "../css/Payment.css";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addToHistory, deliveryAddress, emailAddress,clearCart} from "../actions/actions"
import Checkout from "./Checkout";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import NavbarApp from "./NavbarApp";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Payment(props) {


    const addInfo = ()=> {
        let orderNumber = props.currentOrderNumber  ;
        props.addToHistory({[orderNumber.toString()]:props.cart});
    }
    const [value, setValue] = useState([]);
    console.log(value)
    return (<>
            <div className={"paymentContainer"}>
                <Link to={"Menu"} style={{marginBottom: "100px"}}>
                    <Button variant="primary" type="submit">
                        Back
                    </Button>
                </Link>
                <div style={{display: "grid", gridTemplateColumns: "70% auto", marginTop: '20px', marginRight: "10px"}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          placeholder={props.email.length === 0 ? 'Enter Email' : props.email}
                                          onChange={(event) => {
                                              props.emailAddress(event.target.value)
                                          }}/>

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Delivery Address</Form.Label>
                            <Form.Control type="text"
                                          placeholder={'Enter Delivery Address'}
                                          onChange={(event) => {
                                              props.deliveryAddress(event.target.value)
                                          }}
                                          value={props.delivery_Address}
                            />

                        </Form.Group>
                        <div style={{border: "1px solid black", padding: "10px", marginBottom: "10px"}}>
                            <ToggleButtonGroup style={{marginLeft:"90px",marginRight:"80px"}} type="checkbox" value={value} onChange={ (val) => {
                                console.log(val)
                                if(val.length >1 ){
                                    val= [val[1]]
                                }else if(val.length===1){
                                    val = [val[0]]
                                }
                                setValue(val)
                            }}>
                                <ToggleButton value={1}>CREDIT CARD</ToggleButton>
                                <ToggleButton value={2}>DEBIT CARD</ToggleButton>
                                <ToggleButton value={3}>CASH</ToggleButton>
                            </ToggleButtonGroup>
                            {value.length>0 && value[0] !==3  &&<><Form.Group controlId="formBasicPassword">
                                <Form.Label>Credit Card Number</Form.Label>
                                <Form.Control type="text" placeholder="Credit Card Number"/>
                            </Form.Group>
                                <div className={"card_info"}><Form.Group controlId="formBasicPassword">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="DATE"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                <Form.Label>CVV</Form.Label>
                                <Form.Control type="password" placeholder="Card security code"/>
                                </Form.Group></div></>
                            }
                        </div>
                        <Link to={"receipt"} onClick={addInfo}>
                            <Button variant="primary" type="submit"
                                    disabled={props.cart.length === 0 || !props.email.length > 0 || !props.deliveryAddress.length > 0}>
                                Pay
                            </Button>
                        </Link>
                    </Form>

                    <div style={{marginTop: "20px", borderLeft: "11px"}}>
                        <Checkout payment={true}/>

                    </div>

                </div>
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        email: state.cartReducer.email,
        delivery_Address: state.cartReducer.delivery_address,
        cart: state.cartReducer.cart,
        currentOrderNumber: state.cartReducer.currentOrderNumber,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        emailAddress: (item) => {
            dispatch(emailAddress(item))
        },
        deliveryAddress: (item) => {
            dispatch(deliveryAddress(item))
        },
        addToHistory: (item) => {
            dispatch(addToHistory(item))
        },
        clearCart: () => {
            dispatch(clearCart())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
