import React from 'react';

/* All styles are inlined and described as POJOs - taking advantage of object extends is recommended */
const containerStyle = {
  width: "100%",
  height: "100%",
}

/* This is the main application component */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <div style={containerStyle}>
          <span> Hello World! </span>
        </div>
      </div>
    );
  }
}

export default App;