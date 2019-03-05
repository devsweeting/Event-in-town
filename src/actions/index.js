import React from 'react';
import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';

const API_KEY = process.env.REACT_APP_SONGKICK_KEY;

export const searchLocation = (city, localCityId) => ({
  type: types.SEARCH_LOCATION,
  city,
  cityId: localCityId
});

export function fetchMetroId(city) {
  return function (dispatch) {
    const localCityId = v4();
    dispatch(searchLocation(city, localCityId));
    city = city.replace(' ','_');
    return fetch(`https://api.songkick.com/api/3.0/search/locations.json?query=${ city },or&apikey=${ process.env.REACT_APP_SONGKICK_KEY }`).then(
      response => response.json(),
      error => console.log('WHOOOOOPS', error)
    ).then(function(json) {
      console.log('SUCCESS', json)
    });
  };
}
