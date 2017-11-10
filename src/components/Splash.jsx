import React, { Component } from 'react';

import Restaurant from './Restaurant';

class Splash extends Component {
    constructor() {
        super();
        this.state = {
            emoji : '😱',
        }

        this.getRandomEmoji = this.getRandomEmoji.bind(this);
    }

    get RandomEmoji() {
        const arr = new Array(12869 - 128512)
            .fill()
            .map((d, i) => (i + 128512).toString(16));
        const random = Math.floor(Math.random() * arr.length);
        const newEmoji = String.fromCodePoint('0x' + arr[random]);
        this.setState({
            emoji: newEmoji,
        });
    }

    render () {
        return (
            <div className="top">
                <div className="introtext">
                    <div className="emoji">
                        <p>😱</p>
                        <p onClick={this.getRandomEmoji}>{this.state.emoji}</p>
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