import React, {useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import "../css/Checkout.css";
import Card from "react-bootstrap/Card";
import CheckoutItem from "./CheckoutItem";
import {Link, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {removeFromCart, addToCart, addToHistory} from "../actions/actions"
import Button from "react-bootstrap/Button";
import {bindActionCreators} from 'redux'
import _ from "lodash"
import OrderModalContentItem from "./OrderModalContentItem";

function OrderModalContent(props) {
    const total = () => props.orders.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);

    return (
        <>
            <Card className={"checkout"} style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Your Order</Card.Title>
                    <Card.Text>
                        {props.orders.length === 0 ? "Cart is empty" : "Cart Items"}
                    </Card.Text>

                </Card.Body>
                <ListGroup className="list-group-flush" style={{width: '18rem',height: '300px',overflowY:"scroll"}}>
                    {props.orders.map((item, i) => <OrderModalContentItem key={i} id={item.id} item={item} title={item.title}
                                                                    content={item.content} quantity={item.quantity}
                                                                    price={item.price} index={i} />)}
                </ListGroup>
                <Card.Body>
                    <Card.Text style={{fontWeight: "bold", marginTop: "10px"}}>
                        Total : ${total()}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}


export default OrderModalContent;
