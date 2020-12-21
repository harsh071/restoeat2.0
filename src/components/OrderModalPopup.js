import React, {useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import "../css/OrderItem.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Checkout from "./Checkout";
import OrderModalContentItem from "./OrderModalContentItem";
import OrderModalContent from "./OrderModalContent";

function OrderModalPopup(props) {
    console.log(props)
    return (
        <Modal show={props.show} onHide={props.handleClose} centered >
            <Modal.Header >
                <Modal.Title>Order Number: {props.orderNumber}</Modal.Title>
            </Modal.Header >
            <Modal.Body>Order Status: {props.orderStatus}</Modal.Body>
            <Modal.Body><OrderModalContent orders={props.orders}/></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>    );
}

export default OrderModalPopup;
