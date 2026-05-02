import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: grid;
    grid-template-columns: 110px 1fr;
    grid-gap: 2px;
    background-color: #feffff;
    margin: 0.75rem;
    padding: 0.5rem;
    place-self: center center;
    justify-content: space-evenly;
    
    h3 {
        font-size: 0.85em;
        font-weight: bold;
        margin: 0;
    }
    
    p {
        font-size: 0.75em;
        margin: 0.25em 0 0.25em 0;
    }
`;

const Figure = styled.figure`
    margin: 0;
    padding: 0;
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
`;

const Button = styled.button`
    padding: 5px;
    font-size: 0.75em;
    border-radius: 3px;
    margin: 0 0.5em;
    min-width: 2.5em;
    background: #3aafa9;
    border: 0;
    color: white;
`;

const PhotoThumb = ({ photo, showImageDetails, addFavorite }) => {
    const handleViewClick = () => {
        if (showImageDetails) {
            showImageDetails(photo.id);
        }
    };

    const handleFavoriteClick = () => {
        if (addFavorite) {
            addFavorite(photo);
        }
    };

    return (
        <Box>
            <Figure>
                <Img 
                    title={photo.title} 
                    alt={photo.title}
                    src={`http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${photo.filename}`}
                />
            </Figure>
            <div>
                <h3>{photo.title}</h3>
                <p>{photo.location.city}, {photo.location.country}</p>
                <Button onClick={handleViewClick}>View</Button> <Button onClick={handleFavoriteClick}>❤</Button>
            </div>
        </Box>
    );
};

export default PhotoThumb;
