import styled from 'styled-components';
import React from 'react';
import {Link} from "react-router-dom";

const Heading = styled.h1`
  margin-top: 5vh;
  font-weight: 300;
  text-align: center;
  font-size: 60px;  
`;

const IconsGrid = styled.div`
  height: calc(100vw - 60px);
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 30px;
  padding: 30px;
`;

const Icon = styled.div`
  background-size: 25vw;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({src}) => 'url("' + src + '")'};
  background-color: ${({color}) => color};
  border-radius: 25vw;
`;

export default () => (
    <main>
        <Heading>Columbus</Heading>
        <IconsGrid>
            <Link to="/heartrate" style={{display: 'grid', gridTemplate: '1fr/1fr'}}>
                <Icon src={require('./assets/heart-shape-silhouette.png')} color="#E53935"/>
            </Link>
            <Icon src={require('./assets/lungs-silhouette.png')} color="#039BE5"/>
            <Icon src={require('./assets/big-intestines.png')} color="#43A047"/>
            <Icon src={require('./assets/medical-doctor-specialist.png')} color="#FFB300"/>
        </IconsGrid>

    </main>
)