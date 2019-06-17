import React, { Component } from 'react';
import './Todo.css';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import {  } from 'react-bootstrap';

export default class NoteCard extends Component {
  render() {
    const { title, content, done } = this.props.note
    console.log('title', title)
    return (
      <li>
       <Card className='note-card'>
         <Card.Body className='note-body'>
          <Card.Title>
            <input type="checkbox" id="cbox1" checked={done} onChange={() => {this.props.handleCheck(this.props.index)}}/><label className='title-label' htmlFor="cbox1"> {title} </label>
            </Card.Title>
          <Card.Text>{content}</Card.Text>
          <ButtonToolbar>
            <Button variant="success" onClick={() => {this.props.handleEdit(this.props.index)}}>Edit</Button>
            <Button variant="danger" onClick={() => {this.props.handleDelete(this.props.index)}}>Delete</Button>
          </ButtonToolbar>
        </Card.Body>
      </Card>
      </li>
    )
  }
}
