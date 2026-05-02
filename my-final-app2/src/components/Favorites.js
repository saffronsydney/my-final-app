import React from 'react';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    min-height: 120px;
    overflow-x: auto;
    align-items: center;
`;

const FavoriteImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
`;

const Favorites = ({ favorites }) => {
    return (
        <FavoritesContainer>
            {favorites && favorites.map(fav => (
                <FavoriteImage
                    key={fav.id}
                    src={`http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${fav.filename}`}
                    alt={fav.title}
                    title={fav.title}
                />
            ))}
        </FavoritesContainer>
    );
};

export default Favorites;
