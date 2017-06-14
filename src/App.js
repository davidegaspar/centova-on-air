import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onair: false,
      playlist: null,
      artist: '',
      title: ''
    };
    this.handleGet = this.handleGet.bind(this);
  }
  handleGet() {
    // console.log('here');
    // this.setState({requestInProgress: true});
    let request = new XMLHttpRequest();
    request.open('GET', this.props.url, true);
    // request.setRequestHeader('x-api-key', this.props.apiKey);
    request.onload = function() {
      // this.setState({requestInProgress: false});
      if (request.status >= 200 && request.status < 400) {
        let resp=JSON.parse(request.responseText);console.log(resp);
        // console.log(resp.data[0].track.hasOwnProperty('playlist') ? resp.data[0].track.playlist.title : '');
        this.setState({
          onair: true,
          playlist: resp.data[0].track.hasOwnProperty('playlist') ? resp.data[0].track.playlist.title : null,
          artist: resp.data[0].track.artist,
          title: resp.data[0].track.title
        });
      }else{
        this.setState({
          onair: false
        });
      }
    }.bind(this);
    request.onerror = function() {
      this.setState({
        onair: false
      });
    }.bind(this);
    request.send();
  }
  componentDidMount(){
    this.handleGet();
    setInterval(this.handleGet, 5000);
  }
  render() {
    return (
      <div className="App">
        <div className="Playlist">
          <img src={this.state.onair ? this.props.onair : this.props.offair} alt=""></img>
          <img src={this.state.playlist || this.props.noplaylist} alt=""></img>
        </div>
        <div className="Artist">
          <span>{this.state.artist}</span>
        </div>
        <div className="Title">
          <span>{this.state.title}</span>
        </div>
      </div>
    );
  }
}

export default App;
