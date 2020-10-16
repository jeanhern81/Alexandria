import React, { Component, useState } from "react";
import Geocode from "react-geocode";
import {
  Form,
  Button,
  Modal,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import EditProp from "../components/EditProp";
import MapsModal from "../components/MapsModal";
import DeleteProp from '../components/DeleteProp';
import $ from "jquery";


//Styling sheet
import "../index.css";

function PropertyList(props) {
  const [MapModalState, setMapModalState] = useState({
    addMapsModalShow: false,
  });
  const [EditPropState, setEditPropState] = useState({
    addEditPropShow: false,
  });
  const [latLng, setLatLng] = useState("")
  const [property, setProperty] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    mortgage: "",
    purchasePrice: "",
    rent: "",
    _id: "",
  });
  // maps modal code
  let getlatlng = async (address) => {
    Geocode.setApiKey("AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8");

    await Geocode.fromAddress(address).then(
      response => {
        setLatLng(response.results[0].geometry.location);
        // console.log(lat, lng);
      },
      error => {
        console.error(error);
      }

    )
    await (setMapModalState({ addMapsModalShow: true }));
  };


  let getEditData = async (id) => {
    var id = id;
    // document.querySelector("#address")
    await $.get("/api/" + id, function (data) {
      console.log(data);
      setProperty(data);

    });
    await setEditPropState({ addEditPropShow: true });
  };
  let getMapData = async (id) => {
    var id = id;

    await $.get("/api/" + id, function (data) {
      console.log(data);
      setProperty(data);

    })
    await (setMapModalState({ addMapsModalShow: true }));
  };
  function deleteButton(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/" + id
    }).then(() => {

      console.log("property deleted")
    })

  }
  let addEditPropClose = () => setEditPropState({ addEditPropShow: false });
  let addMapsModalClose = () => setMapModalState({ addMapsModalShow: false });
  let addDeletePropClose = () => setDeletePropState({ addDeletePropShow: false });
  // let EditPropModalOpen = () =>
  //     setEditPropState({ EditPropShow: true });

  return (
    <Container fluid={true}>
      <ul className="list-group">
        {props.state.properties.map((result) => (
          <li className="list-group-item" key={result._id}>
            <Col sm={6} md={4} style={{ float: "left" }}>
              <h5 className="address" id="address">
                Street Address:{"  " + result.address}
              </h5>
              <h5 className="address" id="city">
                City: {"  " + result.city}
              </h5>
              <h5 className="address" id="state">
                State: {"  " + result.state}
              </h5>
              <h5 className="address" id="zip">
                Zip code: {"  " + result.zip}
              </h5>
            </Col>
            <Col sm={6} md={4} style={{ float: "right" }}>
              <h5 className="info" id="expenses">
                Expenses: {"  " + result.expenses}
              </h5>
              <h5 className="info" id="purchasePrice">
                Purchase Price: {"  " + result.purchasePrice}
              </h5>
              <h5 className="info" id="rent">
                Rent: {"  " + result.rent}
              </h5>
            </Col>
          <div>
            
          {/* Edit Button */}
            <EditProp
              _id={property._id}
              address={property.address}
              city={property.city}
              state={property.state}
              zip={property.zip}
              mortgage={property.expenses}
              purchasePrice={property.purchasePrice}
              rent={property.rent}
              show={EditPropState.addEditPropShow}
              onHide={addEditPropClose}
            />
            <Button
              className="editButton"
              variant="info" size="sm"
              onClick={() => getEditData(result._id)}
            >
              {" "}
              Edit
            </Button>
          <br></br>
          {/* Maps Modal*/}
            
              <Button
                key={result._id}
                variant="info" size="sm"
                to="/MapsModal"
                onClick={() => getlatlng(result.address + result.city + result.state)}
              >
                View Map
              </Button>
              <Button
                key={result._id}

                onClick={() => deleteButton(result._id)}
              >
                Delete
              </Button>

              <MapsModal
                latLng={latLng}
                show={MapModalState.addMapsModalShow}
                onHide={addMapsModalClose}
              />


          
          

        {/* Delete button */}
        
        <Button className="deleteProp"

                key={result._id}
                variant="danger" size="sm"
                to="/DeleteProp"
                onClick={() => getDeleteData(result._id)}
              >
                Delete Property
              </Button>

              <DeleteProp address={result.address + result.city + result.state}
                show={DeletePropState.addDeletePropShow}
                onHide={addDeletePropClose}
              />

        </div>
        

          </li>
        ))}
      </ul>
    </Container>
  );
}

export default PropertyList;
