import React, {useState} from 'react';
import NavbarApp from "./NavbarApp";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/Menu.css";
import MenuItem from "./MenuItem";
import Checkout from "./Checkout";
import {connect} from "react-redux";
import {addToCart} from "../actions/actions"
import Image from "react-bootstrap/Image";

function Menu(props) {

    return (
        <div className="Menu">
            <NavbarApp/>
            <div className={"menuTitle"}>MENU ITEMS</div>
            <Image src="menutitle.jpg" fluid />
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
