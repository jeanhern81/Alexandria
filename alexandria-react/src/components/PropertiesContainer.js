import React, { Component } from "react";
import PropertyList from "./PropertyList"
import $ from "jquery";

class PropertiesContainer extends Component {
    state = {

        userId: "",
        properties: []
    };


    async componentDidMount() {


        await this.setState({ userId: this.getUsertId() })
        await console.log(this.state)
        await this.getProperties(this.state.userId)
        await console.log(this.state)

    }
    getUsertId = () => {
        return localStorage.getItem('user')
    }
    getProperties = (userId) => {

        $.ajax({
            method: "POST",
            url: "/api/",
            data: { user_Id: userId }

        })
            .then((res) => this.setState({ properties: res }))
            .catch(err => console.log(err));
    };
    checkState = () => {
        console.log(this.state)
    }



    render() {
        return (
            <div>
                <PropertyList addresses={this.state} />

            </div>
        );
    }
}

export default PropertiesContainer;
