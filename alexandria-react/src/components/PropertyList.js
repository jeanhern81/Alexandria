import React, { Component, useState } from "react";
import Geocode from "react-geocode";
import { Button, Container, Col } from "react-bootstrap";
import EditProp from "../components/EditProp";
import MapsModal from "../components/MapsModal";
import DeleteProp from '../components/DeleteProp';
import PropertyDetails from "../components/PropertyDetails";
import DeletePopupAlert from '../components/DeletePopupAlert';

import $ from "jquery";
//Styling sheet
import "../index.css";

function PropertyList(props) {
  // state for modals //
  const [MapModalState, setMapModalState] = useState({
    addMapsModalShow: false,
  });
  const [EditPropState, setEditPropState] = useState({
    addEditPropShow: false,
  });

  const [DetailsPropState, setDetailsPropState] = useState({
    addDetailsPropShow: false,
  });
  const [PropertyDetailsState, setPropertyDetailsState] = useState({
    addPropertyDetailsShow: false,
  });
  // state for map coordinates //
  const [latLng, setLatLng] = useState("")
  //state for edit property modal //
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

  //Delete Button Modal //
  const [DeletePropState, setDeletePropState] = useState({
    addDeletePropShow: false,
  });




  // maps modal Function 
  let getlatlng = async (address) => {
    Geocode.setApiKey("AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8");

    await Geocode.fromAddress(address).then(
      response => {
        setLatLng(response.results[0].geometry.location);
      },
      error => {
        console.error(error);
      }
    )
    await (setMapModalState({ addMapsModalShow: true }));
  };


  let getEditData = async (id) => {
    var id = id;
    await $.get("/api/" + id, function (data) {
      setProperty(data);

    });
    await setEditPropState({ addEditPropShow: true });
  };

  // property details function api call




  // let getMapData = async (id) => {
  //   var id = id;

  //   await $.get("/api/" + id, function (data) {
  //     console.log(data);
  //     setProperty(data);

  //   })
  //   await (setMapModalState({ addMapsModalShow: true }));
  // };

  // makes api call to ensure proper Id gets passed to delete confirmation modal
  let getDeleteData = async (id) => {
    var id = id;
    $.get("/api/" + id, function (data) {
      console.log(data);
      try {
        setProperty(data)

      } catch (error) {

      }
    }).then(
      setDeletePropState({ addDeletePropShow: true }));
  };

  let getDetailsData = async (id) => {
    var id = id;
    $.get("/api/" + id, function (data) {
      console.log(data);
      try {
        setProperty(data)
        $.ajax({
          url: "/zillowCall/",
          method: "GET",

          Data: { address: data.address, citystate: data.city + " " + data.state },

        }).then((response) =>
          console.log(response))


      } catch (error) {

      }
    })




  };
  // let deleteProperty = (id) =>
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/" + id
  //   }).then((res) => {

  //     console.log(res)
  //   })


  // let getDetailsData = async (id) => {
  //   var id = id;
  //   $.get("/api/" + id, function (data) {
  //     console.log(data);
  //     setProperty(data);
  //   });
  //   await setPropertyDetailsState({ addPropertyDetailsShow: true });
  // };



  // functions for setting modal open/closed states
  let addEditPropClose = () => setEditPropState({ addEditPropShow: false });
  let addDetailsPropClose = () => setDetailsPropState({ addDetailsPropShow: false });
  let addDetailsPropOpen = () => setDetailsPropState({ addDetailsPropShow: true });
  let addMapsModalClose = () => setMapModalState({ addMapsModalShow: false });
  let addDeletePropClose = () => setDeletePropState({ addDeletePropShow: false });
  let addDeletePropOpen = () => setDeletePropState({ addDeletePropShow: true });
  let addPropertyDetailsOpen = () => setPropertyDetailsState({ addPropertyDetailsShow: true });
  let addPropertyDetailsClose = () => setPropertyDetailsState({ addPropertyDetailsShow: false });




  return (
    <Container fluid={true}>
      <ul className="list-group">
        {props.addresses.properties.map((result) => (
          <li className="list-group-item " key={result._id}>
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
                Expenses: {" $" + result.expenses}
              </h5>
              <h5 className="info" id="purchasePrice">
                Purchase Price: {" $" + result.purchasePrice}
              </h5>
              <h5 className="info" id="rent">
                Rent: {" $" + result.rent}
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
              <MapsModal
                latLng={latLng}
                show={MapModalState.addMapsModalShow}
                onHide={addMapsModalClose}
              />
              <p>
                {/* property details button */}
                <Button className='propertyDetails' variant="info" size='sm' to='/PropertyDetails' onClick={() => { getDetailsData(result._id) }}> Property Details </Button>
                <PropertyDetails _id={property._id}
                  address-={property.address}
                  citystate={property.city + " " + property.state}
                  show={PropertyDetailsState.addPropertyDetailsShow}
                  onHide={addPropertyDetailsClose}
                />
              </p>
              {/* Delete button */}
              <Button className="deleteProp"
                key={result._id}
                variant="danger" size="sm"
                to="/DeleteProp"
                onClick={() => { getDeleteData(result._id) }}
              >
                Delete Property
              </Button>
              <DeleteProp
                key={result._id}
                address={property.address}
                _id={property._id}
                show={DeletePropState.addDeletePropShow}
                onHide={addDeletePropClose}
              />
              <div>
                <p></p>

                { /*  Temporary  Bootstrap Alert Button */}

                <DeletePopupAlert />


              </div>


            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default PropertyList;
