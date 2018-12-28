import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./containers/App/App";
import * as serviceWorker from './serviceWorker';
import configStore from "./store";

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const store: any = configStore();

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <App />
            </div>
        </div>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
