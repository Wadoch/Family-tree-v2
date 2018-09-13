import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from '../Routes';

import styles from './style/App.scss';

class App extends Component {
    render() {
        return (
            <div className={ styles.App }>
                <BrowserRouter>
                    { routes() }
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
