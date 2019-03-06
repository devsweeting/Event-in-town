import React, { Component } from 'react';
import LocationForm from './LocationForm';
import './App.css';
import EventList from './eventList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Super Cool Song Site</h1>
        <LocationForm/>
        <EventList />
      </div>
    );
  }
}

export default App;
