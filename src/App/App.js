import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';

import styles from './style/App.scss';

// TODO: Add redux
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
