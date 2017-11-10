import React from 'react';

const ShortRestaurant = props => {
    return (
        <div className="shortrestaurant">
            <img src={props.image} />
            <div className="info">
                <h3>{props.name} - <span className="media">{props.media}</span></h3>
                <p className="description">{props.description}</p>           
            </div>
        </div>
    )
}

export default ShortRestaurant;