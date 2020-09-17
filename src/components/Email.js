import React from 'react';
import "../css/Email.css";
import {connect} from "react-redux";
import { emailAddress} from "../actions/actions"
import Form from 'react-bootstrap/Form'
function Email(props) {

    return (
        <div className={"paymentContainer"}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => {
                        props.emailAddress(event.target.value)
                    }}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
            </Form>
        </div>
    );
}

function mapStateToProps (state) {
    return {
        email: state.email,
    }
}

function mapDispatchToProps(dispatch){
    return {
        emailAddress: (item) => {
            dispatch(emailAddress(item))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Email);
