import React from 'react'
import {connect} from "react-redux";
import {AppBar, FontIcon, IconButton, List, ListItem} from "material-ui";
import {NavigationClose} from "material-ui/svg-icons/index";
import styled from 'styled-components';
import {cyan600, green600, red600} from "material-ui/styles/colors";
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";

// thing is 100x40
const ChartContainer = styled.div`
    height: 60vw;
    display: flex;
    align-items: stretch;
    padding: 2vh 0;
        
    > * {
        flex: 1
    }
`;

const MyLineChart = styled(LineChart)`
  width: auto !important;
  height: auto !important;
  
  svg {
    width: 100% !important;
    height: 100% !important; 
  }
`;

export default connect(
    ({heartRate, heartRateChart}) => ({heartRate, heartRateChart}),
)(({heartRate, heartRateChart}) => (
    <main>
        <AppBar
            title={<span>Heartrate</span>}
            iconElementLeft={<IconButton><NavigationClose/></IconButton>}
        />

        <ChartContainer>
            <MyLineChart width={500} height={300} data={heartRateChart} margin={{ top: 5, right: 15, bottom: 5, left: -20 }}>
                <XAxis/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line dataKey="bpm" dot={false}  stroke="#8884d8"/>
                <Line dataKey={() => heartRate} dot={false} stroke="rgba(255,80,80,0.6)"/>
            </MyLineChart>
        </ChartContainer>

        <List>
            <ListItem leftIcon={<FontIcon color={green600} className="material-icons">cake</FontIcon>}
                      primaryText={"Your sleep was erratic last night. Eat a light dinner today"}
            />
            <ListItem leftIcon={<FontIcon color={cyan600} className="material-icons">beach_access</FontIcon>}
                      primaryText={"You should call your mother to relieve some stress"}
            />
            <ListItem leftIcon={<FontIcon color={red600} className="material-icons">fitness_center</FontIcon>}
                      primaryText={"Take a walk after the lunch"}
            />
        </List>
    </main>
))