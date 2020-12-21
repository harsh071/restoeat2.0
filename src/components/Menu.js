import React, {useState} from 'react';
import NavbarApp from "./NavbarApp";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/Menu.css";
import MenuItem from "./MenuItem";
import Checkout from "./Checkout";
import {connect} from "react-redux";
import {addToCart, removeFromCart, addToHistory} from "../actions/actions"
import Image from "react-bootstrap/Image";
import _ from "lodash"

function Menu(props) {
    const addToCart = (item) => {
        let result = false;

        for (let i = 0; i < props.cartItems.length; i++) {
            if (item.title === props.cartItems[i].title) {
                let tempItem = _.cloneDeep(props.cartItems[i])
                if (tempItem.quantity !== 0) {
                    tempItem['quantity'] = ++tempItem.quantity;
                } else {
                    tempItem['quantity'] = 1;

                }
                props.removeFromCart(item)
                props.addToCart(tempItem)
                result = true;
            }
        }

        if (!result) {
            let tempItem = _.cloneDeep(item)
            tempItem['quantity'] = 1;
            props.addToCart(tempItem);
        }

    }
    return (
        <div className="Menu">
            <div className={"menuTitle"}>MENU ITEMS</div>

            <Image src="menutitle.jpg" fluid/>
            <div className={"MenuContainer"}>
                <ListGroup>
                    {
                        props.menuItems.map((p, i) =>
                            <MenuItem key={i} id={p.id} content={p.content} title={p.title} quantity={p.quantity}
                                      price={p.price}
                                      addToCart={addToCart}/>
                        )
                    }
                </ListGroup>
                <Checkout/>

            </div>


        </div>
    );
}

function mapStateToProps(state) {
    return {
        menuItems: state.cartReducer.menuItems,
        cartItems: state.cartReducer.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item))
        },
        removeFromCart: (item) => {
            dispatch(removeFromCart(item))
        },

        addToHistory: (item) => {
            dispatch(addToHistory(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
