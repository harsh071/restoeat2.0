import React from 'react';
import "../css/Email.css";
import {connect} from "react-redux";
import { emailAddress} from "../actions/actions"
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar
} from 'recharts';
function SaleTrend(props) {
    const data = [
        {
            "name": "Wedges",
            "Units left": 100,
            "Units sold": 123,
            "amt": 240
        },
        {
            "name": "Fries",
            "Units left": 300,
            "Units sold": 139,
            "amt": 221
        },
        {
            "name": "Pani Puri",
            "Units left": 200,
            "Units sold": 980,
            "amt": 329
        },
        {
            "name": "Burgers",
            "Units left": 280,
            "Units sold": 398,
            "amt": 200
        },
        {
            "name": "Pizza",
            "Units left": 890,
            "Units sold": 800,
            "amt": 218
        },
        {
            "name": "Hashbrown",
            "Units left": 390,
            "Units sold": 800,
            "amt": 500
        },
        {
            "name": "Dumplings",
            "Units left": 490,
            "Units sold": 400,
            "amt": 210
        }
    ]


    return (
        <div className={"paymentContainer"}>
            <LineChart width={930} height={250} data={data}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Units sold" stroke="red" />
                <Line type="monotone" dataKey="Units left" stroke="black" />
            </LineChart>
            <BarChart width={930} height={250} style={{marginTop:"100px"}} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Units sold" fill="red" />
                <Bar dataKey="Units left" fill="green" />
            </BarChart>
        </div>
    );
}

function mapStateToProps (state) {
    return {
        email: state.cartReducer.email,
    }
}

function mapDispatchToProps(dispatch){
    return {
        emailAddress: (item) => {
            dispatch(emailAddress(item))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaleTrend);
