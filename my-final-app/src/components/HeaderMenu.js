import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 10px;
    background: #17252A;
    color: white;
    padding: 10px;
`;

const HeaderTitles = styled.div`
    h1 {
        font-size: 2em;
        font-weight: normal;
        margin: 0;
    }
    p {
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

const HeaderMenu = () => {
    return (
        <Header>
            <HeaderTitles>
                <h1>Travel Image App</h1>
                <p>Using create-react-app</p>
            </HeaderTitles>
            <nav>
                <Link to="/">
                    <NavButton>Home</NavButton>
                </Link>
                <Link to="/browse">
                    <NavButton>Browse</NavButton>
                </Link>
                <Link to="/about">
                    <NavButton>About</NavButton>
                </Link>
            </nav>
        </Header>
    );
};

export default HeaderMenu;
