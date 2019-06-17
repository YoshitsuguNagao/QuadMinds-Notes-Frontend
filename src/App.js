import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import note from './lib/note-service';

class App  extends Component {
  state = {
    notes: []
  }
  componentDidMount() {
    note.getNotes()
      .then(notes => {
        this.setState({
          notes
        })
    })
  }
  render() {
    return (
      <div className="App">
        <Todo notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
