import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route} from "react-router";
import HeartRate from "./HeartRate";

export default () => (
    <BrowserRouter>
        <Route path="/" exact component={HeartRate} />
    </BrowserRouter>
)