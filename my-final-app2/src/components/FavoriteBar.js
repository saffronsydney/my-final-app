import React, { useState } from 'react';
import styled from 'styled-components';
import FavoriteItem from './FavoriteItem';

const FavoritesSection = styled.section`
    background: var(--favorites-back);
    padding: 15px 20px;
    border-bottom: 2px solid var(--border-color);
`;

const FavoritesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 5px;
    background: var(--favorites-back);
    color: var(--header-back);
    padding: 5px;
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 15px;
`;

const FavoritesHeader = styled.h2`
    color: black;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    text-transform: none;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const FavoriteBar = ({ favorites, removeFavorite }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <FavoritesSection>
            <HeaderContainer>
                <FavoritesHeader>Favorites ❤</FavoritesHeader>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Hide' : 'Show'}
                </button>
            </HeaderContainer>
            {isOpen && (
                <FavoritesGrid>
                    {favorites && favorites.map(photo => (
                        <FavoriteItem key={photo.id} photo={photo} removeFavorite={removeFavorite} />
                    ))}
                </FavoritesGrid>
            )}
        </FavoritesSection>
    );
};

export default FavoriteBar;
