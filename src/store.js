import dataReducers from './reducers/dataReducer'
import { createStore } from 'redux'

var Store = createStore(dataReducers);

Store.subscribe(function(){
	console.log("Store changed! ", Store.getState());
});

setTimeout(function(){
	Store.dispatch({type: "RECEIVE_DATA", content: [{name: "Robin", age: 4}, {name: "Jack", age:6}]})
}, 500);

export default Store;


