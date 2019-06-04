import React, { Component } from 'react';
import note from '../lib/note-service';
import Form from './Form.js';

export default class Todo extends Component {
  state = {
    notes: [],
    editTitle: '',
    editContent: '',
    editIndex: '',
  }
  handleUpdate = (title,content) => {
    console.log('create',title)
    note.addNote(title,content)
  }
  componentDidMount() {
    note.getNotes()
    .then(notes => {
      console.log('notes', notes)
    })
  }
  render() {
    return (
      <div>
        <h1>TO DO LIST</h1>
          <Form createContext={this.handleUpdate}/>
        
      </div>
    )
  }
}
