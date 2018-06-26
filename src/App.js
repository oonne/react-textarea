import React, { Component } from 'react';
import './App.css';
import Textarea from './component/Textarea'

class App extends Component {
  
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this)

    this.state = {
      content: '',
    }
  }

  onChange (e) {
    let val = e.target.value

    this.setState({
      content: val
    })
  }

  render() {
    let content = this.state.content;

    return (
      <div className="App">
        <Textarea value={content} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

export default App;
