import constants from '../constants';
const { initialState, types } = constants;

const eventSearchReducer = (state = initialState, action) => {
  let newEventEntry;
  let newEventStateSlice;
  switch (action.type) {
    case types.SEARCH_LOCATION:
      return action.city;

    case types.SAVE_EVENT:
      console.log(action.displayName);
      newEventEntry = Object.assign({}, state[action.eventId], {
      isFetching: false,
      displayName: action.displayName,
      dateTime: action.dateTime,
      eventId: action.eventId
    });
    newEventStateSlice = Object.assign({}, state, {
      [action.eventId]: newEventEntry
    });
    return newEventStateSlice;
    default:
      return state;
  }
};

export default eventSearchReducer;
