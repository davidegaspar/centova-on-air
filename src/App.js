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
    let request = new XMLHttpRequest();
    request.open('GET', this.props.url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        let resp=JSON.parse(request.responseText);//console.log(resp);
        if (resp.type === 'result') {
          this.setState({
            onair: true,
            playlist: resp.data[0].track.hasOwnProperty('playlist') ? resp.data[0].track.playlist.title : null,
            artist: resp.data[0].track.artist || '',
            title: resp.data[0].track.title || ''
          });
        } else {
          this.setState({
            onair: false
          });
        }
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
    setInterval(this.handleGet, this.props.refresh_in_seconds * 1000);
  }
  render() {
    return (
      <div className="App">
        <div className="Info">
          <div className="Playlist">
            <span>{this.state.playlist}</span>
          </div>
          <div className="Artist">
            <span>{this.state.artist}</span>
          </div>
          <div className="Title">
            <span>{this.state.title}</span>
          </div>
        </div>
        <div className="Cover">
          { this.state.playlist &&
            <img className="Image" src={`${this.props.img_folder}/${this.state.playlist}.png`} alt={this.state.playlist}></img>
          }
          <img className="OnAir" src={this.state.onair ? this.props.onair_true_img : this.props.onair_false_img} alt="onair"></img>
        </div>
      </div>
    );
  }
}

export default App;
