import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function NoteForm(props) {
  const title = useFormInput('');
  const content = useFormInput('');

  return (
    <Form className='note-card'>
      <div className='note-form'>
        <Form.Control type="text" placeholder="title" {...title} required={true}/>
        <Form.Control as="textarea" rows="3" placeholder="content" {...content} required={true}/>
        <Button variant="primary" onClick={() => {props.createContext(title.value,content.value)}}>Add</Button>
        <Button variant="secondary" onClick={() => {props.cancelForm()}}>Cancel</Button>
      </div>
    </Form>
  )
}

function useFormInput(initial) {
  const [value, setValue] = useState(initial)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange,
  }
}