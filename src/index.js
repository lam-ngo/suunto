import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore} from "redux";
import reducer from './redux/reducers';
import {Provider} from "react-redux";
import "./redux/actions";

const store = createStore(reducer);

// Interface for android app
global.dispatch = store.dispatch;

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

registerServiceWorker();
