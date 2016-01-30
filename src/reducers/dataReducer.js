import { combineReducers } from 'redux'
import { RECEIVE_DATA } from '../actions/actions'

var _ = require("underscore");

function data(state = {}, action){
	switch (action.type) {
    case RECEIVE_DATA:
      return {data: action.content};
    default:
      return state;
  }
}

let dataReducers = data; //For multiple reducers on data: combineReducers(data);

export default dataReducers;