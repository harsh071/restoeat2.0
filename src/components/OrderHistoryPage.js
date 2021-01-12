import React, {useState} from 'react';
import NavbarApp from "./NavbarApp";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/OrderHistoryPage.css";
import MenuItem from "./MenuItem";
import Checkout from "./Checkout";
import {connect} from "react-redux";
import {addToCart, removeFromCart} from "../actions/actions"
import Image from "react-bootstrap/Image";
import _ from "lodash"
import OrderItem from "./OrderItem";

function OrderHistoryPage(props) {
    console.log(props);
    return (
        <div className="OrderHistory">
            <div className={"OrderHistoryTitle"} style={{background: "black"}}>ORDER HISTORY</div>
            {props.orderHistory.length > 0 ? <div className={"OrderHistoryContainer"}>
                    <ListGroup>
                        {
                            props.orderHistory.map((p, i) => {
                                    let orderNumber = Object.keys(p)[0];
                                    return <OrderItem key={i} id={p.id} orders={p[orderNumber]} orderNumber={orderNumber}/>
                                }
                            )
                        }
                    </ListGroup>

                </div>
                : <div style={{
                    margin: "50px 65% 50px 35%",
                    width: "400px",
                    height: "fit-content",
                    fontSize: "30px",
                    fontWeight: "bold"
                }}>NO ITEMS AVAILABLE</div>}


        </div>
    );
}

function mapStateToProps(state) {
    return {
        menuItems: state.cartReducer.menuItems,
        cartItems: state.cartReducer.cart,
        orderHistory: state.cartReducer.orderHistory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item))
        },
        removeFromCart: (item) => {
            dispatch(removeFromCart(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryPage);
