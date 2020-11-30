import React from 'react';

import "../css/CheckoutItem.css";

import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'


function CheckoutItem(props) {
    const removeItem = () => {
        props.removeFromCart(props);
    }
    const decr = () => {
        props.decr(props)
    }
    const incr = () => {
        props.incr(props)
    }
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
                    {!props.receipt &&<div className={"quantityButton checkoutItem"}>
                        <Button size={"sm"} onClick={incr} variant={"dark"}> <FontAwesomeIcon color={"white"}
                                                                                              icon={faPlus}
                                                                                              size="xs"/>
                        </Button>
                        <Button size={"sm"} onClick={decr} variant={"dark"}>

                            <FontAwesomeIcon color={"white"} icon={faMinus} size="xs"/>

                        </Button>
                    </div>}

                <div className={
                    "checkoutItem"
                }>
                    ${props.price}
                </div>
                <div className={
                    "checkoutItem"
                }>
                    {!props.receipt &&
                        <Button className={"removeButton"} variant="transparent" size="sm" onClick={removeItem}>
                            <FontAwesomeIcon color={"gray"} icon={faTimesCircle} size="lg"/>
                        </Button>}
                </div>
            </div>

        </div>
        </ListGroupItem>

    );
}

export default CheckoutItem;
