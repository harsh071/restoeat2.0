import React, {useState} from 'react';
import NavbarApp from "./NavbarApp";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/Menu.css";
import MenuItem from "./MenuItem";
import Checkout from "./Checkout";
import {connect} from "react-redux";
import {addToCart} from "../actions/actions"
const posts = [
    {id: 1, content: 'Hello World', title: 'Pasta', price: 10},
    {id: 2, content: 'Installation', title: 'Burger', price: 10},
    {id: 3, content: 'Hello World', title: 'Pizza', price: 20},
    {id: 4, content: 'Hello World', title: 'Fries', price: 30},
    {id: 5, content: 'Installation', title: 'Hashbrown', price: 40},

];

function Menu(props) {

    return (
        <div className="Menu">
            <NavbarApp/>
            <div className={"menuTitle"}>MENU ITEMS</div>

            <div className={"MenuContainer"}>
                <ListGroup>
                    {
                        props.menuItems.map((p, i) =>
                            <MenuItem key={i} id={p.id} content={p.content} title={p.title} quantity={p.quantity} price={p.price}
                                      addToCart={props.addToCart}/>
                        )
                    }
                </ListGroup>
                <Checkout />
            </div>


        </div>
    );
}

function mapStateToProps (state) {
    return {
        menuItems: state.menuItems,
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            dispatch(addToCart(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
