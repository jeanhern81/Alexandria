import React, { Component, useState } from "react";
import { Form, Button, Modal, Image } from 'react-bootstrap';
import EditProp from "../components/EditProp"
import MapsModal from "../components/MapsModal"
import $ from "jquery";
import { GrAddCircle } from "react-icons/gr";


function PropertyList(props) {
    const [MapModalState, setMapModalState] = useState({ addMapsModalShow: false })
    const [EditPropState, setEditPropState] = useState({ addEditPropShow: false });
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [mortgage, setMortgage] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [rent, setRent] = useState("");
    const [_id, set_id] = useState("")
    const [latLng, setLatLng] = useState("")

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
            setMortgage(data.expenses);
            setPurchasePrice(data.purchasePrice);
            setRent(data.rent);


        }).then(setEditPropState({ addEditPropShow: true }));
    }
    let addEditPropClose = () => setEditPropState({ addEditPropShow: false });
    let addMapsModalClose = () => setMapModalState({ addMapsModalShow: false });
    // let EditPropModalOpen = () =>
    //     setEditPropState({ EditPropShow: true });


    return (

        <ul className="list-group">

            {props.state.properties.map(result => (
                <li className="list-group-item" key={result._id} >
                    <h1 id="address">Street Address:{"  " + result.address}</h1>
                    <h1 id="city">City:  {"  " + result.city}</h1>
                    <h1 id="state">State:  {"  " + result.state}</h1>
                    <h1 id="zip">Zip code:  {"  " + result.zip}</h1>
                    <h1 id="expenses">Expenses:  {"  " + result.expenses}</h1>
                    <h1 id="purchasePrice">Purchase Price:  {"  " + result.purchasePrice}</h1>
                    <h1 id="rent">Rent:  {"  " + result.rent}</h1>
                    <EditProp _id={_id}
                        address={address} city={city} state={state} zip={zip}
                        mortgage={mortgage} purchasePrice={purchasePrice} rent={rent}
                        show={EditPropState.addEditPropShow}
                        onHide={addEditPropClose}
                    />
                    <Button variant="primary" onClick={() => getEditData(result._id)}> edit</Button>
                    <div>
                        <Button
                            variant="info"
                            to="/MapsModal"
                            onClick={() => setMapModalState({ addMapsModalShow: true })}
                        >
                            View Map <GrAddCircle />
                        </Button>
                        <MapsModal

                            address={result.address + result.city + result.state + result.zip}
                            show={MapModalState.addMapsModalShow}
                            onHide={addMapsModalClose}
                        />
                    </div>

                </li>
            ))}


        </ul>

    );
}

export default PropertyList;