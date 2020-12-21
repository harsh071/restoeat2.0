import React from 'react';

import "../css/OrderModalContentItem.css";

import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'


function OrderModalContentItem(props) {

    return (

        <ListGroupItem>
            <div className={"checkoutContainer"}>
                <div className={
                    "checkoutItem"
                }>
                    {props.title}
                </div>
                <div className={"innerContainer"}>
                    <div className={
                        "checkoutItem"
                    }>
                        {props.quantity}
                    </div>
                    </div>

                    <div className={
                        "checkoutItem"
                    }>
                        ${props.price}
                    </div>
            </div>
        </ListGroupItem>

    );
}

export default OrderModalContentItem;
