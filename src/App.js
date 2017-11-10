import React, { Component } from 'react';
import './App.css';
import Splash from './components/Splash';
import RestaurantList from './components/RestaurantList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurantList: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://fictional-restaurants.herokuapp.com/api/restaurants')
    .then(res => res.json())
    .then(res => {
      this.setState({
        restaurantList: res.data.restaurants,
        apiDataLoaded: true,
      });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Splash />
        {this.state.apiDataLoaded ? (
          <RestaurantList restaurantList={this.state.restaurantList} />
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    );
  }
}

export default App;
