import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant">
            <div className="main">
                <div className="image" 
                    style={{backgroundImage:
                        `url(${props.restaurant.image})`}}>
                </div>
                <div className="info">
                    <h3>{props.restaurant.name}</h3>
                    <div className="meta">
                        <span className="media">{props.restaurant.media}</span>
                        <span className="media-category">{props.restaurant.media_category}</span>
                        <span className="category">{props.restaurant.category}</span>
                    </div>
                    <div className="description">
                        <p>{props.restaurant.description}</p>
                    </div>
                </div>
            </div>
            <p className="attr">{props.attr}</p>
        </div>
    );
};

export default Restaurant;