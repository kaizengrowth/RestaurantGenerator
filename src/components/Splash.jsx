import React, { Component } from 'react';

import Restaurant from './Restaurant';

class Splash extends Component {
    render () {
        return (
            <div className="top">
                <div className="introtext">
                    <div className="emoji">
                        <p>😱</p>
                    </div> 
                    <div className="splashtext">
                        <h1>Today, the Thundercats are lunching at...</h1>
                    </div>
                    <Restaurant />
                    <div className="new-restauraunt-button">
                        <span className="button">
                            Get another restaurant!
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;