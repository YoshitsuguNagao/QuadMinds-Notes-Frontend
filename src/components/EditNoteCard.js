import React, { useState } from 'react';

export default function Form(props) {
  const title = useFormInput(props.note.title);
  const content = useFormInput(props.note.content);

  return (
    <div className='note-card'>
      <div className="form-title">
        <input type="text" {...title} placeholder='TITLE'/>
      </div>
      <div className="form-content">
        <textarea type="text" {...content} placeholder='CONTENT'/>
      </div>
      <button className="form-btn" onClick={() => {props.handleUpdate(props.index,title.value,content.value)}}>
        <i className="fas fa-save"></i>
      </button>
    </div>
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