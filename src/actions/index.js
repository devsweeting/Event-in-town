import React from 'react';
import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';

const API_KEY = process.env.REACT_APP_SONGKICK_KEY;

export const searchLocation = (city, localCityId) => ({
  type: types.SEARCH_LOCATION,
  city,
  cityId: localCityId
});

export const receiveEvent = (artist, displayName) => ({
  type: types.RECEIVE_EVENT,
  artist,
  displayName
});

export function fetchMetroId(city) {
  return function (dispatch) {
    const localCityId = v4();
    city = city.replace(' ','_');
    return fetch(`https://api.songkick.com/api/3.0/search/locations.json?query=${ city },or&apikey=${ process.env.REACT_APP_SONGKICK_KEY }`).then(
      response => response.json(),
      error => console.log('WHOOOOOPS', error)
    ).then(function(json) {
      const cityId = json.resultsPage.results.location[0].metroArea.id;
      console.log('SUCCESS', json);
      fetchEvents(cityId, dispatch);

    });
  };
}

export function fetchEvents(id, dispatch) {
  return fetch(`https://api.songkick.com/api/3.0/metro_areas/${id}/calendar.json?apikey=${ process.env.REACT_APP_SONGKICK_KEY }`).then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    if (json.resultsPage) {
      console.log('SUCCESS2', json);
      json.resultsPage.results.event.forEach( event => {
        const displayName = event.displayName;
        const dateTime = event.start.datetime;
        const eventId = v4();
        console.log(displayName);
        dispatch(saveEvent(displayName, dateTime, eventId));
      })
    } else {
      console.log('We couldn\'t locate events!');
    }
  });
}

export const saveEvent = (displayName, dateTime, eventId) => ({
  type: types.SAVE_EVENT,
    displayName,
    dateTime,
    eventId
});
