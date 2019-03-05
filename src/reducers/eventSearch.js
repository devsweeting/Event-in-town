import constants from '../constants';
const { initialState, types } = constants;

const eventSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_LOCATION:
      return action.city;
    default:
      return state;
  }
};

export default eventSearchReducer;
