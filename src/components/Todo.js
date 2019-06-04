import React, { Component } from 'react';
import note from '../lib/note-service';
import Form from './Form';
import NoteCard from './NoteCard'
import EditNoteCard from './EditNoteCard'
import { CardDeck } from 'react-bootstrap';


export default class Todo extends Component {
  state = {
    notes: [],
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

  handleDelete = (index) => {
    const { notes } = this.state
    note.deleteNote(this.state.notes[index]._id)
    notes.splice(index,1)
    this.setState({
      notes: [...notes]
    })
  }

  handleEdit = (index) => {
    this.setState({
      editIndex: index
    })
  }

  handleUpdate = (index,newTitle,newContent) => {
    const { _id, title, content } = this.state.notes[index]
    if(title !== newTitle) {
      note.patchNote(_id,'title',newTitle)
    } else if(content !== newContent) {
      note.patchNote(_id,'content',newContent)
    } else {
      note.updateNote(_id, title, content)
    }
    this.setState({
      editIndex: '',
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

  componentDidUpdate() {
    note.getNotes()
      .then(notes => {
        this.setState({
          notes
        })
    })
  }

  render() {
    const { notes, editIndex } = this.state;
    return (
      <div>
        <h1>TO DO LIST</h1>
        <Form createContext={this.handleAdd}/>
        <div className="note-list">
        <CardDeck>
          {
            notes.map((note,index)=> {
              if(editIndex !== index) {
                return <NoteCard key={index} index={index} note={note} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
              } else {
                return <EditNoteCard key={index} index={index} note={note} handleUpdate={this.handleUpdate}/>
              }
            })
          }
          </CardDeck>
        </div>
      </div>
    )
  }
}
