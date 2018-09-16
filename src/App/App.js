import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';

import styles from './style/App.scss';

// TODO: Add redux
class App extends Component {
    render() {
        return (
            <div className={ styles.App }>
                <Provider store={ store }>
                    <BrowserRouter>
                        { routes() }
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
