import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Offline, Online } from "react-detect-offline";

import Routes, { OfflineRoutes } from './routes';
import store from './store';

import styles from './style/App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Offline>
                    <Provider store={ store }>
                        <BrowserRouter>
                            <div className={ styles.App }>
                                <OfflineRoutes />
                            </div>
                        </BrowserRouter>
                    </Provider>
                </Offline>
                <Online>
                    <Provider store={ store }>
                        <BrowserRouter>
                            <div className={ styles.App }>
                                <Routes />
                            </div>
                        </BrowserRouter>
                    </Provider>
                </Online>
            </div>
        );
    }
}

export default App;
