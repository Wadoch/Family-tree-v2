import React, { Component } from 'react';

import styles from './styles/styles.scss';
import Navigation from "../../Components/Navigation";

// TODO: add bff url to config and change in login endpoint
// TODO: add verify JWT at page init
// TODO: add demo in readme
// TODO: list of families etc.

class MainScreen extends Component {
    render() {
        return(
            <div className={ styles.container }>
                <Navigation />
                Main
            </div>
        );
    }
}

export default MainScreen;