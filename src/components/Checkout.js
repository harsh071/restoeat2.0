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

function Checkout(props) {
    const total = () => props.cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0)
    const decr = (item) => {
        for (let i = 0; i < props.cartItems.length; i++) {
            if (item.title === props.cartItems[i].title) {
                let tempItem = _.cloneDeep(item)

                tempItem['quantity'] = --tempItem.quantity;
                props.removeFromCart(item)
                if (tempItem.quantity !== 0) {
                    props.addToCart(tempItem)
                    props.addToHistory(tempItem)
                }
            }
        }
    }
    const incr = (item) => {
        for (let i = 0; i < props.cartItems.length; i++) {
            if (item.title === props.cartItems[i].title) {
                let tempItem = _.cloneDeep(item)

                tempItem['quantity'] = ++tempItem.quantity;
                props.removeFromCart(item)
                props.addToCart(tempItem)
                props.addToHistory(tempItem)

            }
        }
    }

    return (
        <>
            <Card className={"checkout"} style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Your Order</Card.Title>

                    <Card.Text>
                        {props.cartItems.length === 0 ? "Cart is empty" : "Cart Items"}
                    </Card.Text>

                </Card.Body>
                <ListGroup className="list-group-flush">
                    {props.cartItems.map((item, i) => <CheckoutItem key={i} id={item.id} item={item} title={item.title}
                                                                    decr={decr} incr={incr}
                                                                    content={item.content} quantity={item.quantity}
                                                                    price={item.price} receipt={props.receipt} index={i}
                                                                    removeFromCart={props.removeFromCart}/>)}
                </ListGroup>

                <Card.Body>
                    <Card.Text style={{fontWeight: "bold", marginTop: "10px"}}>
                        Total : ${total()}
                    </Card.Text>
                    <Link to={"Payment"}>
                        {useLocation().pathname === "/Menu" ? <>{props.cartItems.length === 0 ? "" :
                            <Button style={{width: "100%"}} variant="primary" type="submit">
                                Checkout
                            </Button>
                            }</>
                            : <>{" "}</>}
                    </Link>

                </Card.Body>
            </Card>
        </>
    );
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartReducer.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({addToCart, removeFromCart, addToHistory}, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
