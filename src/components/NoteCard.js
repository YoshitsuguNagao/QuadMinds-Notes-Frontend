import React, { Component } from 'react';
import './Todo.css';
import { Card,ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class NoteCard extends Component {
  render() {
    const { title, content } = this.props.note
    return (
      <>
       <Card className='note-card'>
         <Card.Body className='note-body'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <ButtonToolbar>
            <Button variant="success" onClick={() => {this.props.handleEdit(this.props.index)}}>Edit</Button>
            <Button variant="danger" onClick={() => {this.props.handleDelete(this.props.index)}}>Delete</Button>
          </ButtonToolbar>
        </Card.Body>
      </Card>
      </>
    )
  }
}
