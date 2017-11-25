import React from 'react';
import './App.css';
import {MuiThemeProvider} from "material-ui";
import Routes from "./Routes";

export default () => (
    <MuiThemeProvider>
      <Routes/>
    </MuiThemeProvider>
);
