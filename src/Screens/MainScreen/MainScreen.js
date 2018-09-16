import React, { Component } from 'react';

import styles from './styles/styles.scss';

// TODO: if not logged in:
// TODO: basic info, fancy images and links to register (loginForm as part of page)
// TODO: as loggedIn:
// TODO: list of families etc.

class MainScreen extends Component {
    render() {
        return(
            <div className={ styles.container }>
                Main
            </div>
        );
    }
}

export default MainScreen;