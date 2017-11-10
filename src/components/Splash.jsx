import React, { Component } from 'react';

import Restaurant from './Restaurant';

class Splash extends Component {
    constructor() {
        super();
        this.state = {
            emoji: '😱',
            apiData: {
                restaurant: {
                    name: null,
                    description: null,
                    category: null,
                    id: null,
                    media_category: null,
                    source: null,
                    image: null,
                },
                attr: null,
            }
        }

        this.getRandomEmoji = this.getRandomEmoji.bind(this);
        this.getRandomRestaurant = this.getRandomRestaurant.bind(this);
    }

    componentDidMount() {
        this.getRandomRestaurant();
    }

    getRandomEmoji() {
        const arr = new Array(128697 - 128512)
            .fill()
            .map((d, i) => (i + 128512).toString(16));
        const random = Math.floor(Math.random() * arr.length);
        const newEmoji = String.fromCodePoint('0x' + arr[random]);
        this.setState({
            emoji: newEmoji,
        });
    }

    getRandomRestaurant() {
        fetch('http://fictional-restaurants.herokuapp.com/api/restaurants/random')
        .then(res => res.json())
        .then(res => {
            this.setState({
                apiData: res.data,
            });
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="top">
                <div className="introtext">
                    <div className="emoji">
                        <p onClick={this.getRandomEmoji}>{this.state.emoji}</p>
                    </div> 
                    <div className="splashtext">
                        <h1>Today, the Thundercats are lunching at...</h1>
                    </div>
                </div>
                <Restaurant 
                    restaurant={this.state.apiData.restaurant}
                    attr={this.state.apiData.attr}
                />
                <div className="new-restauraunt-button">
                    <span className="button" onClick={this.getRandomRestaurant}>
                        Get another restaurant!
                    </span>
                </div>
            </div>
        );
    }
}

export default Splash;