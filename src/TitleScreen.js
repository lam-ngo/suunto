import styled from 'styled-components';
import React from 'react';
import {Link} from "react-router-dom";

const Heading = styled.h1`
  margin-top: 5vh;
  font-weight: 500;
  text-align: center;
  font-size: 40px;  
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template: 50vw 50vw/ 50vw 50vw;
`;

export default () => (
    <main>
        <Heading>Columbus</Heading>
        <IconsGrid>
            <Link to="/heartrate">

            </Link>
        </IconsGrid>

    </main>
)