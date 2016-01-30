import { combineReducers } from 'redux'
import { RECEIVE_DATA, CLEAR_DATA } from '../actions/actions'

var _ = require("underscore");

function data(state = {}, action){
	switch (action.type) {
        case RECEIVE_DATA:
            return {data: action.content};
        case CLEAR_DATA:
            return {data: null};
    default:
      return state;
  }
}

let dataReducers = data; //For multiple reducers on data: combineReducers(data);

export default dataReducers;