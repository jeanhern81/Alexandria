import React, { Component, useState } from "react";
import { Form, Button, Modal, Image } from 'react-bootstrap';
import EditProp from "../components/EditProp"
import $ from "jquery";
function PropertyList(props) {
    const [EditPropState, setEditPropState] = useState({ addEditPropShow: false });
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [mortgage, setMortgage] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [rent, setRent] = useState("");
    const [_id, set_id] = useState("")

    console.log(props.state)
    console.log(EditPropState)
    let getEditData = (id) => {
        var id = id
        // document.querySelector("#address")
        $.get("/api/" + id, function (data) {
            console.log(data.address)
            set_id(data._id)
            setAddress(data.address);
            setCity(data.city);
            setState(data.state);
            setZip(data.zip);
            setMortgage(data.mortgage);
            setPurchasePrice(data.purchasePrice);
            setRent(data.rent);

        }).then(setEditPropState({ addEditPropShow: true }));
    }
    let addEditPropClose = () => setEditPropState({ addEditPropShow: false });
    // let EditPropModalOpen = () =>
    //     setEditPropState({ EditPropShow: true });


    return (

        <ul className="list-group">

            {props.state.properties.map(result => (
                <li className="list-group-item" key={result._id}>
                    <h1 id="address">{result.address}</h1>
                    <h1 id="city">{result.city}</h1>
                    <h1 id="state">{result.state}</h1>
                    <h1 id="zip">{result.zip}</h1>
                    <h1 id="expenses">{result.mortgage}</h1>
                    <h1 id="purchasePrice">{result.purchasePrice}</h1>
                    <h1 id="rent">{result.rent}</h1>
                    <EditProp _id={_id}
                        address={address} city={city} state={state} zip={zip}
                        mortgage={mortgage} purchasePrice={purchasePrice} rent={rent}
                        show={EditPropState.addEditPropShow}
                        onHide={addEditPropClose}
                    />
                    <Button variant="primary" onClick={() => getEditData(result._id)}> edit</Button>

                </li>
            ))}


        </ul>

    );
}

export default PropertyList;