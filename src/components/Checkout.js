import React, {useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import "../css/Checkout.css";
import Card from "react-bootstrap/Card";
import CheckoutItem from "./CheckoutItem";
import {Link , useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {removeFromCart} from "../actions/actions"
import Button from "react-bootstrap/Button";
function Checkout(props) {
    const total = () => props.cartItems.reduce((total,item) => {
        return total + item.price
    },0)

    return (
        <>
            <Card className={"checkout"} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Your Order</Card.Title>

                    <Card.Text>
                        {props.cartItems.length === 0 ? "Cart is empty": "Cart Items"}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {props.cartItems.map((item,i)=><CheckoutItem key={i} id={item.id} title={item.title} content={item.content} quantity={item.quantity} price={item.price} receipt={props.receipt} index={i} removeFromCart={props.removeFromCart}/>)}
                </ListGroup>

                <Card.Body>
                    <Card.Text>
                        <div style={{fontWeight:"bold",marginTop:"10px"}}>
                            Total : ${total()}
                        </div>
                    </Card.Text>
                    <Link to={"Payment"}>
                        { useLocation().pathname === "/Menu" ? <Card.Link>{props.cartItems.length === 0 ? "" :
                            <Button style={{width:"100%"}} variant="primary" type="submit" >
                                Checkout
                            </Button>
                        }</Card.Link>
                           :  <Card.Link>{" "}</Card.Link>}
                    </Link>

                </Card.Body>
            </Card>
        </>
    );
}

function mapStateToProps (state) {
    return {
        cartItems: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return {
        removeFromCart: (item) => {
            dispatch(removeFromCart(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
