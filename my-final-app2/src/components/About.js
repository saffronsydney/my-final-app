import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    color: white;
    font-weight: bold;
    text-align: center;
    background-image: url("http://www.randyconnolly.com/funwebdev/3rd/images/travel/large1600/6119127716.jpg");
    height: 800px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const BannerContent = styled.div`
    display: inline-block;
    margin-top: 200px;
    max-width: 800px;
    
    h1 {
        font-size: 2rem;
        text-shadow: 2px 2px black;
        margin: 0;
    }
    
    h3 {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-shadow: 2px 2px black;
        margin: 0;
        line-height: 1.5;
    }
`;

const About = () => {
    return (
        <Banner>
            <BannerContent>
                <h1>About Travel Image App</h1>
                <h3>A one-stop-shop to explore some of the most scenic and beautiful images from photographers all over the world.</h3>
            </BannerContent>
        </Banner>
    );
};

export default About;
