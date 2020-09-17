import React, {useState} from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Checkout from "./Checkout";
import '../css/Receipt.css'

function Receipt(props) {


    return (
        <div className={"receiptContainer"}>
            <div>{"Your email is: "}<h5>{props.email}</h5></div>
            <div>{"Your delivery address is: "}<h5>{props.deliveryAddress}</h5></div>
            <div>{"THANK YOU FOR ORDERING."}</div>
            <div>{"Below is your receipt"}</div>
            <Checkout receipt={true}/>
            <Link className="link" to={"/"}>HOME</Link>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        email: state.email,
        deliveryAddress: state.delivery_address
    }
}


export default connect(mapStateToProps)(Receipt);
