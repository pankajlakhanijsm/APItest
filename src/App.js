import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: []
    }
  }
  submitHandler = () => {
    debugger;
    const { formValue } = this.state;
    const keyName = Object.keys(formValue)[0];
    fetch({ method: "post", body: { [keyName]: formValue[keyName] }, url: "http://localhost:4000/profile" }).then(e => console.log(e));
  }
  clickHandler = (event) => {
    debugger;
    const { formValue } = this.state;
    const { name, files } = event.target;
    this.setState({ formValue: formValue.push({ [name]: Array.from(files) }) });
  }
  render() {
    return (
      <div className="App">
        <input type="file" name="avatar" onChange={this.clickHandler} />
        <button class="btn btn-default" onClick={this.submitHandler} >Submit</button>
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   return {
//     data: state.data.data
//   }
// }



export default connect(
  // mapStateToProps,

)(App);
