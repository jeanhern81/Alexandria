import React, { Component } from 'react'
import NavBarProps from "../components/NavBarProps";
import Footer from '../components/Footer';
import PropertiesContainer from '../components/PropertiesContainer';

export default class Properties extends Component {
    render() {
        return (
            <div>
                <NavBarProps />
                <PropertiesContainer />


                <Footer />
            </div>
        )
    }
}
