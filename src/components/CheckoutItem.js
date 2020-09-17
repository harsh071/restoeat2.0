import React from 'react';

import "../css/CheckoutItem.css";

import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function CheckoutItem(props) {
    const removeItem = () => {
        props.removeFromCart(props);
    }
    return (

        <ListGroupItem className={"checkoutContainer"}>
            <div className={
                "checkoutItem"
            }>
                {props.title}
            </div>
            <div style={{marginLeft:"auto"}} className={
                "checkoutItem"
            }>
                ${props.price}
            </div>
            {!props.receipt?<Button className={"removeButton"} variant="transparent" size="sm" onClick={removeItem}>
                <FontAwesomeIcon color={"gray"} icon={faTimesCircle} size="lg"/>
            </Button>:''}
        </ListGroupItem>

    );
}

export default CheckoutItem;
