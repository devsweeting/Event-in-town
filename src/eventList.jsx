import React from 'react';
import Event from './Event'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function EventList({eventList}){
  console.log(eventList)
  return(
    <div>
      {Object.keys(eventList).map( eventId => {
        let event = eventList[eventId];
        return(
          <div>
            <Event
              displayName={event.displayName}
              key={event.eventId}
            />
          </div>
        )
      })
    }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    eventList: state
  };
};

export default connect(mapStateToProps)(EventList);
