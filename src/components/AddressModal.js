// <Form.Group controlId="formBasicEmail">
//     <Form.Label style={{marginTop:"100px", color:"black",fontWeight:"bold", fontSize:"20px",background:"white",width:"175px"}}>Delivery Address</Form.Label>
//     <Form.Control type="text"
//                   placeholder={'Enter Delivery Address'}
//                   onChange={(event) => {
//                       props.deliveryAddress(event.target.value)
//                   }}
//                   value={props.delivery_Address}
//     />
//     <Form.Label style={{marginTop:"10px", color:"black",fontWeight:"bold", fontSize:"20px",background:"white",width:"175px"}}>OR</Form.Label>
//     <hr className={"line"}/>
//     <Form.Label className={"seperator"} style={{ color:"white",fontWeight:"bold", fontSize:"20px",width:"350px",background:'#DC3545',}}>PICKUP AT 2291 PEMBINA HWY</Form.Label>
//
// </Form.Group>

import React from 'react';
import Form from "react-bootstrap/Form";
import "../css/MyModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {addToCart, deliveryAddress, removeFromCart} from "../actions/actions";
import {connect} from "react-redux";

function AddressModal(props) {

    return (
        <Modal show={props.show} onHide={props.handleClose} centered >
            <Modal.Title style={{cursor: "pointer",padding:"10px"}} onClick={props.handleClose}>
                <FontAwesomeIcon icon={faTimesCircle} size="lg"/>
            </Modal.Title>
            <Form.Group controlId="formBasicEmail" style={{display:"flex",alignItems:"center",flexDirection:"column",padding:"30px"}}>
                <Form.Label style={{ color:"black",fontWeight:"bold", fontSize:"20px",background:"white"}}>Delivery Address</Form.Label>
                <Form.Control type="text"
                              placeholder={'Enter Delivery Address'}
                              onChange={(event) => {
                                  props.deliveryAddress(event.target.value)
                              }}
                              value={props.delivery_Address}
                />
                <Button onClick={props.handleClose} style={{marginTop:"10px"}}>Add Address</Button>
                <Form.Label style={{marginTop:"10px", color:"black",fontWeight:"bold", fontSize:"20px",background:"white"}}>OR</Form.Label>
                <Form.Label className={"seperator"} style={{ color:"white",fontWeight:"bold", fontSize:"20px",background:'#dc3545',padding:"0px 10px"}}>PICKUP AT 2291 PEMBINA HWY</Form.Label>

            </Form.Group>

        </Modal>
    );
}


function mapStateToProps(state) {
    return {
        menuItems: state.cartReducer.menuItems,
        cartItems: state.cartReducer.cart,
        delivery_Address: state.cartReducer.delivery_address,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item))
        },
        removeFromCart: (item) => {
            dispatch(removeFromCart(item))
        },
        deliveryAddress: (item) => {
            dispatch(deliveryAddress(item))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressModal);
