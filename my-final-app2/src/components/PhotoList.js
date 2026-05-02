import React from 'react';
import styled from 'styled-components';
import PhotoThumb from './PhotoThumb';

const Article = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    grid-gap: 5px;
    background-color: #2b7a78;
`;

const PhotoList = ({ photos, showImageDetails, addFavorite }) => {
    return (
        <Article>
            {photos && photos.map(photo => (
                <PhotoThumb key={photo.id} photo={photo} showImageDetails={showImageDetails} addFavorite={addFavorite} />
            ))}
        </Article>
    );
};

export default PhotoList;
