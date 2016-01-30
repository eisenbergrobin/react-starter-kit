# README #

### React/Redux Web Application Starter Kit ###

Template for React/ReactDOM/Redux web applications. Use this as a baseline to init a new React project.

Uses:

* [Babel 6](https://babeljs.io/) for transpiling ES6/7 syntax
* [React/ReactDOM](https://facebook.github.io/react/) for rendering
* [Redux](https://github.com/rackt/redux) for state management
* [Webpack](https://webpack.github.io) for module packaging

Features: 

* Can be used in browser or Cordova applications
* Live-reload using [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
* Inline CSS


### Project Setup and Use ###

  * **Requirements:**
    * NodeJS and NPM
    * Global Babel, Webpack

  * **Project Setup**

Run the following command to setup the project dependencies:

```sh
 cd path/to/the/repo
 npm install 
```

This will install the project dependencies. 

You can then build the transpiled package using [Webpack](https://webpack.github.io):

```sh
 webpack
```

If all dependencies were installed correctly you should have the following output:

```sh
Hash: some_hash
Version: webpack 1.12.12
Time: 35623ms
    Asset    Size  Chunks             Chunk Names
bundle.js  759 kB       0  [emitted]  main
    + 184 hidden modules
```

 * **Setting up live-reload**

This creates a file in './www' named 'bundle.js' that contains a packaged version of the application. 
This file is included by the HTML page in ./www/index.html.
Pointing a webserver at ./www should now serve your application. 

To enable live-reloading: 
```sh
 webpack-dev-server
```

This will create a webserver that serves ```./www``` on port 8080 and watches ```./src``` for changes, while refreshing the bundle at ```./www/bundle.js``` when files have changed. 
The ```index.html``` file includes the 'webpack-dev-server' endpoint which serves a small Websocket server to notify the page if the ```bundle.js``` has changed. 

That means that any time a file is changed in ```./src```, the page at ```http://localhost:8080``` will re-download and re-evaluate the new ```bundle.js``` transpiled script.

If the command succeeded you should have the following output: 
```sh
 Hash: some_hash
 Version: webpack 1.12.12
 Time: 35623ms
     Asset    Size  Chunks             Chunk Names
 bundle.js  759 kB       0  [emitted]  main
     + 184 hidden modules
 webpack: bundle is now VALID.
```

The command will keep running and watch for changes in ```./src```. 

 * **Using the Template**
 
Once you've looked around the stack and understood how it works, you can copy the project and use it as a baseline for your own project.
Just copy the project and edit the following files to match your needs:

* ```./www/index.html```: Customize favicons, index title, styles, font imports, js (lib) imports, etc...
* ```./package.json```: Change name, author, and eventually version and dependencies

You are now ready to start your own project. 

### Project Structure ###

Run the following command to print the project structure:
```sh
tree -I 'idea|node_modules|git|bundle.js'
```

```
.
├── README.markdown //This README
├── package.json //Project information and dependencies
├── src
│   ├── actions
│   │   └── actions.js //Redux Actions
│   ├── components 
│   │   └── App.jsx //Root Application component
│   ├── main.js //Application entry point. Binds stores to root component. 
│   ├── reducers
│   │   └── dataReducer.js //Reducers for data actions
│   └── store.js // Store creator
├── webpack.config.js // Webpack configuration file
└── www
    └── index.html //Main HTML file

5 directories, 9 files
```

### TODOs ###

This template is in-development. TODOs:

* Add hot-reloading
* Add tests
* Create generation scripts to create new projects from baseline template
* Add common actions and propagate them to root state (login, responsive resize using media queries, etc...) 


### Contributing ###

All PRs and comments are welcome. 