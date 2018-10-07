import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import styles from './style/App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div className={ styles.App }>
                        <Routes />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
