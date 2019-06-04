import React, { Component } from 'react';
import './Todo.css'

export default class NoteCard extends Component {
  render() {
    const { title, content } = this.props.note
    return (
      <div className='note-card'>
        <h3>{title}</h3>
        <p>{content}</p>
        <button className='del-btn' onClick={() => {
          console.log('this.props.index',this.props.index)
          this.props.handleDelete(this.props.index)}}><i className="fas fa-trash-alt"></i></button>
      </div>
    )
  }
}
