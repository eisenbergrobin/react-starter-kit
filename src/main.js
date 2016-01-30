import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import Store from './store'
import App from './components/App';

function init(){

	var rootElement = <Provider store={Store}>
    	<App />
  	</Provider>;

  	var rootParent = document.getElementById('app');

	ReactDOM.render( rootElement, rootParent) ;
}

document.addEventListener("DOMContentLoaded", function() {
    init();
});