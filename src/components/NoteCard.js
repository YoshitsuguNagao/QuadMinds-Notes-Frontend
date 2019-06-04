import React, { Component } from 'react';
import './Todo.css';
import { Card } from 'react-bootstrap';

export default class NoteCard extends Component {
  render() {
    const { title, content } = this.props.note
    return (
      <Card className='note-card'>
        <Card.Body className='note-body'>
          <div>
            <Card.Title className='note-title-font'>{title}</Card.Title>
          </div>
          <div className="note-btns">
            <button className='edit-btn' onClick={() => {this.props.handleEdit(this.props.index)}}>
              <i className="fas fa-edit"></i>
            </button>
            <button className='del-btn' onClick={() => {this.props.handleDelete(this.props.index)}}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </Card.Body>
        <Card.Text className="note-text">{content}</Card.Text>
      </Card>
    )
  }
}
