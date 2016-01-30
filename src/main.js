/* These map global variables to the following CommonJS modules.
    requiring these modules is no longer necessary
 */
require("underscore"); //binds to '_'
require('react'); //binds to 'React'
require('react-dom'); //binds to 'ReactDOM'

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