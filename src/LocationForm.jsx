import React from 'react';
import { fetchMetroId } from './actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function LocationForm({ dispatch }){
  let _location;

  function handleLocationFormSubmission(event) {
    event.preventDefault();
    console.log(_location.value.trim());
    dispatch(fetchMetroId(_location.value.trim()));
    _location.value = '';
  }

  return(
    <div>
      <h2>Enter your location</h2>
      <form onSubmit={handleLocationFormSubmission}>
        <input
          type='text'
          id='location'
          placeholder='Portland, OR (for example)'
          ref={(input) => {_location= input;}}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

LocationForm.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(LocationForm);
