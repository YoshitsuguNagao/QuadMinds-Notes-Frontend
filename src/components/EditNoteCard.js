import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function EditNoteCard(props) {
  const title = useFormInput(props.note.title);
  const content = useFormInput(props.note.content);

  return (
    <Form className='note-card'>
      <div className='note-form'>
        <Form.Control type="text" placeholder="title" {...title} required={true}/>
        <Form.Control as="textarea" rows="3" placeholder="content" {...content} required={true}/>
        <Button variant="primary" onClick={() => {props.handleUpdate(props.index,title.value,content.value)}}>Update</Button>
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