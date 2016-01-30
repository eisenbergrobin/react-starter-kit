import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

function init(){
	ReactDOM.render(<App />, document.getElementById('app'));

}

document.addEventListener("DOMContentLoaded", function() {
    init();
});