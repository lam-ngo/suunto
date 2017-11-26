import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route} from "react-router";
import HeartRate from "./HeartRate";
import TitleScreen from "./TitleScreen";

export default () => (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={TitleScreen} />
            <Route path="/heartrate" exact component={HeartRate} />
        </div>
    </BrowserRouter>
)