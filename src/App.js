import React from 'react';
import './App.css';
import Editor from '../src/Components/Editor/Editor'
import Preview from '../src/Components/Preview/Preview'
const marked = require('marked');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: ''
    }
    this.dataUpdate = this.dataUpdate.bind(this);
  }

  dataUpdate(data){
    this.setState({
      content: marked(data)
    })
  }
  render(){
    return (
      <div className="App">
        <Editor dataUpdate={this.dataUpdate}/>
        <Preview viewContent={this.state.content}/>
      </div>
    );
  }
}

export default App;
