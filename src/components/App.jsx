import { connect } from 'react-redux'

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

  renderCurrentStoreData(){
    return _.map(this.props.data, function(datum){
        return <div key={datum.name}> {datum.name} </div>
      })
  }

  render() {
    return (
      <div>
        <div style={containerStyle}>
          <span> Hello World! </span>
        </div>
        <br/>
        <div>
          <div> Store content: </div>
          {this.props.data ? this.renderCurrentStoreData() :  <span> Store is empty </span>}
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.data
  }
}

export default connect(select)(App)