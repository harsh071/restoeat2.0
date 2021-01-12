import React from 'react';

import "../css/MyModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyModal(props) {

    return (
            <Modal show={props.show} onHide={props.handleClose} centered >
                <Modal.Header >
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header >
                <Modal.Body>{props.content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={props.handleSaveChanges}>
                        Add To Cart
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}

export default MyModal;
