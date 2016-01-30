import dataReducers from './reducers/dataReducer'
import { createStore } from 'redux'

var Store = createStore(dataReducers);

Store.subscribe(function(){
	console.log("Store changed! ", Store.getState());
});

export default Store;


