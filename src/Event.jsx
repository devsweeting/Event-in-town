import React from 'react';
import PropTypes from 'prop-types';

function Event({displayName}){
  return(
    <div>
      <h1>{displayName}</h1>
    </div>
  )
}

Event.propTypes = {
  displayName: PropTypes.string
}

export default Event;
