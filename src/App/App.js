import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';
import Navigation from '../Components/Navigation';

import styles from './style/App.scss';

// TODO: Add redux
class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div className={ styles.App }>
                        <Navigation />
                        { routes() }
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
