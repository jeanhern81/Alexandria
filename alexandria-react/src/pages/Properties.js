import React from 'react';
import NavBarProps from "../components/NavBarProps";
import Footer from '../components/Footer';
import PropertiesContainer from '../components/PropertiesContainer';

import '../index.css';
import "./Properties.css";


function Properties() {


        return (
            <div>
                <NavBarProps />
                <PropertiesContainer />

                <h1> Props Page Works!</h1>

                <Footer />
            </div>
        );
    }



export {Properties}