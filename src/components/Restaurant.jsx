import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant">
            <div className="main">
                <div className="image" 
                    style={{ backgroundImage:
                        'url(https://img.buzzfeed.com/buzzfeed-static/static/2015-07/16/12/enhanced/webdr06/enhanced-32098-1437062439-1.png?crop=590:390;0,55&amp;downsize=715:*&amp;output-format=auto&amp;output-quality=auto)',
                    }}
                />
                <div className="info">
                    <h3>Gusteau's</h3>
                    <div className="meta">
                        <span className="media">Ratatouille</span>
                        <span className="media-category">Movie</span>
                        <span className="category">Fine Dining</span>
                    </div>
                    <div className="description">
                        <p>
                            A Parisian bistro...a gourmet chef...
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <p class="attr">
            Description from "28 Fictional Restaurants That Should Actually Be Real" By Mallory McInnis.https : //www.buzzfeed.com/mallorymcinnis/i-want-to-get-drunk-at-paddys-while-eating-a-bluth-banana
        </p>
        </div>
    );
};

export default Restaurant;