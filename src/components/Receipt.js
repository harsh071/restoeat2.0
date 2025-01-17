import React, {useState} from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Checkout from "./Checkout";
import '../css/Receipt.css'
import Button from "react-bootstrap/Button";
import {addToHistory, deliveryAddress, emailAddress,clearCart} from "../actions/actions"

function Receipt(props) {
    return (
        <div className={"receiptContainer"}>
            <Checkout receipt={true}/>
            <div className="receiptDetails">

                <div>{"Your email is: "}<h5>{props.email}</h5></div>
                <div>{"Your delivery address is: "}<h5>{props.deliveryAddress}</h5></div>
                <div>{"THANK YOU FOR ORDERING."}</div>
                <div>{"Below is your receipt"}</div>
            </div>
            <Link className="link" to={"/"} onClick={()=>props.clearCart()}>HOME</Link>

        </div>
    );
}

function mapStateToProps(state) {
    return {
        email: state.cartReducer.email,
        deliveryAddress: state.cartReducer.delivery_address
    }
}


function mapDispatchToProps(dispatch) {
    return {

        clearCart: () => {
            dispatch(clearCart())
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Receipt);
