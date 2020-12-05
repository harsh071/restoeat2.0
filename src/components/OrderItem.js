import React, {useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import "../css/OrderItem.css";
import Button from "react-bootstrap/Button";
import MyModal from "./MyModal";

function OrderItem(props) {
    const [show, setShow] = useState(false);

    const handleSaveChanges = (e) => {
        setShow(false);
        props.addToCart(props);
    }
    const handleClose = (e) => {
        setShow(false);

    }
    const handleShow = () => setShow(true);

    return (
        <>
            <div style={{width:"650px",alignItems:"center"}} onClick={show ? handleClose : handleShow}>

                <div className={"listItemCont"} style={{minWidth:"290px", margin:"10px",width:"90%"}}>
                    <div className={"listItem"}>
                        <div className={"listContent"} style={{fontWeight:"bold"}}>{props.title}</div>
                        <div className={"listContent listContentDesc"}>{props.content}</div>
                        <div className={"listContent listPrice"}>${props.price}</div>
                    </div>
                </div>

            </div>
            <OrderModal show={show} title={props.title} content={props.content} handleSaveChanges={handleSaveChanges.bind(this)} handleClose={handleClose.bind(this)}/>
        </>
    );
}

export default OrderItem;
