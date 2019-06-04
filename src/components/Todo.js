import React, { Component } from 'react';
import note from '../lib/note-service'

export default class Todo extends Component {
  state = {
    notes: [],
    editTitle: '',
    editContent: '',
    editIndex: '',
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
        <button>ADD</button>
        
      </div>
    )
  }
}
