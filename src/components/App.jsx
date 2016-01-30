import { connect } from 'react-redux'

/* All styles are inlined and described as POJOs - taking advantage of object extends is recommended */
const containerStyle = {
  width: "100%",
  height: "100%",
}

/* This is the dummy data that will be added to the store when the 'add' button is clicked */
const dummyAction = {type: "RECEIVE_DATA", content: [{name: "Robin", age: 4}, {name: "Jack", age:6}]};

/* This is the main application component */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentWillMount() {

  }

  renderDummyButton(){
    return <div> 
      <br/> 
      <button onClick={() => this.props.dispatch(dummyAction)}>
        Add dummy data to store
      </button>
    </div>
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
          {this.renderDummyButton()}
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