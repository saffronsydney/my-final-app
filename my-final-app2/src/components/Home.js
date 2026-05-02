import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = styled.div`
    color: white;
    font-weight: bold;
    text-align: center;
    background-image: url("http://www.randyconnolly.com/funwebdev/3rd/images/travel/large1600/9496792166.jpg");
    height: 800px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const BannerContent = styled.div`
    display: inline-block;
    margin-top: 200px;
    
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
    }
`;

const NavButton = styled.button`
    margin: 0 0.5rem;
    background: #3aafa9;
    border: 0;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
`;

const Home = () => {
    return (
        <Banner>
            <BannerContent>
                <h1>Travel Photos</h1>
                <h3>Upload and Share</h3>
                <p>
                    <Link to="/browse"><NavButton>Browse</NavButton></Link>
                    <Link to="/about"><NavButton>About</NavButton></Link>
                </p>
            </BannerContent>
        </Banner>
    );
};

export default Home;
