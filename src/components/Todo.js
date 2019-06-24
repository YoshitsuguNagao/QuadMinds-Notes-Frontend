import React, { Component } from 'react';
import note from '../lib/note-service';
import NoteForm from './NoteForm';
import NoteCard from './NoteCard'
import EditNoteCard from './EditNoteCard'
import Sortable from '../Sortable';
import { Modal, Button } from 'react-bootstrap';

export default class Todo extends Component {
  state = {
    notes: [],
    editIndex: '',
    displayForm: false,
    simpleList: [ 2, 3, 4, 5, 6, 190000],
    show: false,
  }

  handleAdd = (title,content) => {
    const { notes } = this.state
    if(title === "" || content === "") {
      this.setState({
        show: true
      })
    } else {
      note.addNote(title,content)
      .then((newNote) => {
        this.setState({
          notes: [...notes, newNote],
          displayForm: !this.state.displayForm
        })
      })
    }
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
      editIndex: index,
      displayForm: false,
    })
  }

  handleUpdate = (index,newTitle,newContent) => {
    const { _id, title, content } = this.state.notes[index]
    if(newTitle === "" || newContent === "") {
      this.setState({
        show: true
      })
    } else {
      if(title !== newTitle) {
        note.patchNote(_id,'title',newTitle)
      } else if(content !== newContent) {
        note.patchNote(_id,'content',newContent)
      } else {
        note.updateNote(_id, title, content)
      }
      const newNotes = this.state.notes
      const newNote = {...this.state.notes[index],title: newTitle,content: newContent}
      newNotes[index] = newNote;
      this.setState({
        editIndex: '',
        notes: newNotes,
      })
    }
  }

  handleForm = () => {
    this.setState({
      editIndex: '',
      displayForm: !this.state.displayForm
    })
  }

  handleCheck = (index) => {
    const { _id, done } = this.state.notes[index]
    note.patchNote(_id,'done',!done)
    const newNotes = this.state.notes
    const newNote = {...this.state.notes[index],done: !done}
    newNotes[index] = newNote;
    this.setState({
      notes: newNotes,
    })
  }
  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleCancelForm = () => {
    this.setState({ displayForm: false })
  }

  handleCancelEdit = () => {
    this.setState({ editIndex: '' })
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
    const { notes, editIndex, displayForm } = this.state;
    return (
      <div>
        <h1>TO DO LIST</h1>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ooops!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please enter title and content</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {
          displayForm ? <NoteForm createContext={this.handleAdd} cancelForm={this.handleCancelForm}/>
          :<Button variant="primary" onClick={this.handleForm}>Add New Note</Button>
        }
        <div className="note-list">
        <Sortable
            options={{
              animation: 150
            }}
            className="block-list"
            ref={c => {
              if (c) {
                this.simpleList = c.sortable;
              }
            }}
            tag="ul"
            onChange={(notes, sortable) => {
              this.setState({notes});
            }}
          >
            {
            notes.map((note,index)=> {
              console.log('note', note)
              if(editIndex !== index) {
                return <NoteCard key={index} index={index} note={note} handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleCheck={this.handleCheck}/>
              } else {
                return <EditNoteCard key={index} index={index} note={note} handleUpdate={this.handleUpdate}/>
              }
              })
            }
          </Sortable>
          {/* {
            notes.map((note,index)=> {
              if(editIndex !== index) {
                return <NoteCard key={index} index={index} note={note} handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleCheck={this.handleCheck}/>
              } else {
                return <EditNoteCard key={index} index={index} note={note} handleUpdate={this.handleUpdate} cancelEdit={this.handleCancelEdit}/>
              }
            })
          } */}
        </div>
      </div>
    )
  }
}
