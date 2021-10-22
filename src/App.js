import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div className="App">
        <form action="http://localhost:4000/profile" method="post" enctype="multipart/form-data">
          <input type="file" name="avatar" />
          <input type="submit" value="Get me the stats!" class="btn btn-default" />
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
	return {
		data: state.data.data
	}
}


const mapDispatchToProps = dispatch => {
	return {
		multiplyTwo: () => dispatch(multiplyTwo())
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
