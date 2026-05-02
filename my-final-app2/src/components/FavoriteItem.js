import React from 'react';

const FavoriteItem = ({ photo, removeFavorite }) => {
    return (
        <div className="item_wrapper">
            <img
                src={`http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${photo.filename}`}
                alt={photo.title}
                title={photo.title}
                className="photoThumb"
                onClick={() => removeFavorite && removeFavorite(photo.id)}
                style={{ cursor: 'pointer' }}
            />
            <div className="popover_content">
                <button className="popover_button" onClick={() => removeFavorite && removeFavorite(photo.id)}>Remove</button>
            </div>
        </div>
    );
};

export default FavoriteItem;
