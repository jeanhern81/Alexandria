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

  let getZillowData = async (locationData) => {
    console.log(locationData)
    // await (setDetailsPropState({ addDetailsPropShow: true }))

  }
  function addressFormat(locationData) {
    var splitAddress = locationData.split("% ");
    return splitAddress;
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function zillowAPI(locationArray) {

    // console.log("Zestimate document works");
    $.ajax({
      url: "/zillowCall/",
      method: "GET",
      data: { locationArray }
    }).then(function (response) {

      var res = JSON.parse(response)
      console.log(res.result[0]);

      console.log(res.result[0].zestimate[0].valuationRange[0].high[0]._);

      //Builds HOME DETAILS data table
      // $("#code").text(response.data[0].useCode);
      // $("#bedrooms").text(response.data[0].bedrooms);
      // $("#bathrooms").text(response.data[0].bathrooms);
      // $("#buildingSize").text(numberWithCommas(response.data[0].finishedSqFt));
      // $("#lotSize").text(numberWithCommas(response.data[0].lotSizeSqFt));
      // $("#yearBuilt").text(numberWithCommas(response.data[0].yearBuilt));

      //Builds MARKET VALUATION table

      $("#zestimate").text(numberWithCommas(res.result[0].zestimate[0].amount[0]._));
      $("#highValue").text(numberWithCommas(res.result[0].zestimate[0].valuationRange[0].high[0]._));
      $("#lowValue").text(numberWithCommas(res.result[0].zestimate[0].valuationRange[0].low[0]._));


    })

      .catch(function (error) {
        console.log(error);
      });

  }
  // let getMapData = async (id) => {
  //   var id = id;

  //   await $.get("/api/" + id, function (data) {
  //     console.log(data);
  //     setProperty(data);

  //   })
  //   await (setMapModalState({ addMapsModalShow: true }));
  // };


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
  let deleteProperty = (id) =>
    $.ajax({
      method: "DELETE",
      url: "/api/" + id
    }).then((res) => {

      console.log(res)
    })


  let getDetailsData = async (id) => {
    var id = id;
    $.get("/api/" + id, function (data) {
      console.log(data);
      setProperty(data);
    });
    await setPropertyDetailsState({ addPropertyDetailsShow: true });
  };



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
                <Button className='propertyDetails' variant="info" size='sm' to='/PropertyDetails' onClick={addPropertyDetailsOpen}> Property Details </Button>
                <PropertyDetails _id={result._id}
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




              </div>


            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default PropertyList;
