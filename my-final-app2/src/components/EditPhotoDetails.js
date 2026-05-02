import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    background-color: #feffff;
    padding: 0.5em;
    width: 95%;
`;

const DetailsBox = styled.div`
    box-sizing: border-box;
    margin: 0.75em;
    padding: 1em;
    background-color: #def2f1;
`;

const Form = styled.form`
    display: grid;
    
    img {
        width: 100%;
    }
    
    legend {
        font-weight: bold;
        color: #2b7a78;
        font-size: 1.2em;
    }
    
    label {
        display: block;
        margin-top: 0.5rem;
        margin-bottom: 0.25rem;
    }
    
    input {
        padding: 0.75em;
        border: 0;
        border-radius: 5px;
    }
    
    input:focus {
        box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.49);
    }
`;

const EditPhotoDetails = ({ photo, updatePhoto }) => {
    if (!photo) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'city' || name === 'country') {
            updatePhoto({
                ...photo,
                location: {
                    ...photo.location,
                    [name]: value
                }
            });
        } else {
            updatePhoto({ ...photo, [name]: value });
        }
    };

    return (
        <Article>
            <DetailsBox>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <legend>Edit Photo Details</legend>
                    <img 
                        src={`http://www.randyconnolly.com/funwebdev/3rd/images/travel/medium640/${photo.filename}`}
                        alt={photo.title} 
                    />
                    <label>Title</label>
                    <input type="text" name="title" value={photo.title || ''} onChange={handleChange} />
                    <label>City</label>
                    <input type="text" name="city" value={photo.location?.city || ''} onChange={handleChange} />
                    <label>Country</label>
                    <input type="text" name="country" value={photo.location?.country || ''} onChange={handleChange} />
                </Form>
            </DetailsBox>
        </Article>
    );
};

export default EditPhotoDetails;
