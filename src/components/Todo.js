import React, { Component } from 'react';
import note from '../lib/note-service';
import Form from './Form';
import NoteCard from './NoteCard'

export default class Todo extends Component {
  state = {
    notes: [],
    editTitle: '',
    editContent: '',
    editIndex: '',
  }
  handleAdd = (title,content) => {
    const { notes } = this.state
    note.addNote(title,content)
    .then((newNote) => {
      this.setState({
        notes: [...notes, newNote]
      })
    })

  }
  handleDeletete = (index) => {
    const { notes } = this.state
    note.deleteNote(this.state.notes[index]._id)
    notes.splice(index,1)
    this.setState({
      notes: [...notes]
    })
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
    const { notes } = this.state;
    return (
      <div>
        <h1>TO DO LIST</h1>
        <Form createContext={this.handleAdd}/>
        {
          notes.map((note,index)=> {
            return <NoteCard key={index} index={index} note={note} handleDelete={this.handleDeletete}/>
          })
        }
      </div>
    )
  }
}
