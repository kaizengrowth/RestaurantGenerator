import React from 'react';

import ShortRestaurant from './ShortRestaurant';

const RestaurantList = props => {
    return (
        <div className="restaurant-list">
            {props.restaurantList.map(restaurant => {
                return (
                    <ShortRestaurant
                        name={restaurant.name}
                        description={restaurant.description}
                        image={restaurant.image}
                        media={restaurant.media}
                        key={restaurant.id}
                    />
                );
            })}
        </div>
    );
};

export default RestaurantList;