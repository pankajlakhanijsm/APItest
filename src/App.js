import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileFormat: "jpeg",
      quality: 100
    }
  }
  submitHandler = () => {
    const { file, fileFormat, quality } = this.state;
    let data = new FormData();
    data.append("images", file);
    data.append("fileFormat", fileFormat);
    data.append("quality", quality);
    const requestOptions = {
      method: 'POST',
      body: data
    };
    fetch('http://localhost:4000/profile', requestOptions)
      .then(response => response.body)
      .then(rb => {
        const reader = rb.getReader();

        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                  console.log('done', done);
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                console.log(done, value);
                push();
              })
            }

            push();
          }
        });
      })
      .then(stream => {
        // Respond with our stream
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(result => {
        // Do things with result
        console.log(result);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
  imageChooseHandler = (event) => {
    this.setState({ file: event.target.files[0] });
  }
  imageQualityHandler = (event) => {
    this.setState({ quality: event.target.value });
  }
  imageFormatHandler = (event) => {
    this.setState({ fileFormat: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.imageChooseHandler} />
        <input type="number" placeHolder="enter image required quality" onChange={this.imageQualityHandler} />
        <select value="JPEG" onChange={this.imageFormatHandler}>
          <option>JPEG</option>
          <option>PNG</option>
        </select>
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
