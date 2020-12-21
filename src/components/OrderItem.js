import React, {useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import "../css/OrderItem.css";
import Button from "react-bootstrap/Button";
import MyModal from "./MyModal";
import OrderModalPopup from "./OrderModalPopup";

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
    console.log(props)
    let color = "Black";
    color = props.orders[0].orderStatus && props.orders[0].orderStatus === "In transit to restaurant" ? "Red" : "Green";
    return (
        <>
            <div style={{width:"650px",alignItems:"center"}} onClick={show ? handleClose : handleShow}>
                <div className={"listItemCont"} style={{minWidth:"290px", margin:"10px",width:"90%"}}>
                    <div className={"listItem"}>
                        <div className={"listContent"} style={{marginLeft:"10px",fontWeight:"bold"}}>#{props.orderNumber}</div>
                        <div className={"listContent listContentDesc"}  style={{color:color,fontWeight:"bold"}}>{props.orders[0].orderStatus}</div>
                        <div className={"listContent listContentDesc"}  style={{color:color,fontWeight:"bold"}}>{"CUSTOMER NAME"}</div>
                        <div className={"listContent listContentDesc"}  style={{color:color,fontWeight:"bold"}}>{"COURIER NAME"}</div>
                    </div>
                </div>

            </div>
            <OrderModalPopup show={show} title={props.title} orderNumber={props.orderNumber} orders={props.orders} orderStatus={props.orders[0].orderStatus} handleSaveChanges={handleSaveChanges.bind(this)} handleClose={handleClose.bind(this)}/>
        </>
    );
}

export default OrderItem;
