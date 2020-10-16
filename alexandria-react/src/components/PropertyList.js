import React, { Component, useState } from "react";
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
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");
  // const [mortgage, setMortgage] = useState("");
  // const [purchasePrice, setPurchasePrice] = useState("");
  // const [rent, setRent] = useState("");
  // const [_id, set_id] = useState("")

  let getEditData = async (id) => {
    var id = id;
    // document.querySelector("#address")
    await $.get("/api/" + id, function (data) {
      console.log(data);
      setProperty(data);
      // set_id(data._id)
      // setAddress(data.address);
      // setCity(data.city);
      // setState(data.state);
      // setZip(data.zip);
      // setMortgage(data.expenses);
      // setPurchasePrice(data.purchasePrice);
      // setRent(data.rent);
    });
    await setEditPropState({ addEditPropShow: true });
  };
  let getMapData = (id) => {
    var id = id;
    // document.querySelector("#address")
    $.get("/api/" + id, function (data) {
      console.log(data);
      setProperty(data);
      // setAddress(data.address);
      // setCity(data.city);
      // setState(data.state);
      // setZip(data.zip);
      // setMortgage(data.expenses);
      // setPurchasePrice(data.purchasePrice);
      // setRent(data.rent);
    }).then(setMapModalState({ addMapsModalShow: true }));
  };
  let addEditPropClose = () => setEditPropState({ addEditPropShow: false });
  let addMapsModalClose = () => setMapModalState({ addMapsModalShow: false });
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
              variant="info"
              onClick={() => getEditData(result._id)}
            >
              {" "}
              Edit
            </Button>
            <br></br>

            <div>
              <Button
                key={result._id}
                variant="info"
                to="/MapsModal"
                onClick={() => getMapData(result._id)}
              >
                View Map
              </Button>

              <MapsModal
                address={result.address + result.city + result.state}
                show={MapModalState.addMapsModalShow}
                onHide={addMapsModalClose}
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default PropertyList;
