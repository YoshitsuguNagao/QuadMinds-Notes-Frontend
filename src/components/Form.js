import React, { useState, useEffect } from 'react';



export default function Form(props) {
  const title = useFormInput('');
  const content = useFormInput('');

  return (
    <div>
      <div className="form-title">
        <input type="text" {...title} placeholder='title'/>
      </div>
      <div className="form-content">
        <input type="text" {...content} placeholder='content'/>
      </div>

      <button className="form-btn" onClick={() => {props.createContext(title.value,content.value)}}>ADD</button>
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