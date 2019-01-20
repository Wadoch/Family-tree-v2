import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function (reg) {
                console.log('Yey!', reg);
            }).catch(function (err) {
                console.log('Boo!', err);
            });
    })
}