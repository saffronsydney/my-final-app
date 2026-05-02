import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoList from './PhotoList';
import EditPhotoDetails from './EditPhotoDetails';

const Container = styled.section`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 47% auto;
    grid-gap: 0;
`;

const PhotoBrowser = ({ photos, updatePhoto }) => {
    const [currentPhotoId, setCurrentPhotoId] = useState(null);

    const showImageDetails = (photoId) => {
        setCurrentPhotoId(photoId);
    };

    const activePhoto = photos.find(p => p.id === currentPhotoId);

    return (
        <Container>
            <PhotoList photos={photos} showImageDetails={showImageDetails} />
            {activePhoto ? (
                <EditPhotoDetails photo={activePhoto} updatePhoto={updatePhoto} />
            ) : (
                <div style={{ padding: '1em' }}>Select a photo to edit details</div>
            )}
        </Container>
    );
};

export default PhotoBrowser;
