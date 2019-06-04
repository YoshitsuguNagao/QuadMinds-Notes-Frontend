import axios from 'axios';

class Note {
  constructor() {
    this.note = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    });
  };

  getNotes() {
    console.log('getNotes')
    return this.note.get(`/notes`)
      .then(({ data }) => data);
  };

  addNote(title,content) {
    console.log('addNote')
    return this.note.post(`/notes`,{title,content})
      .then(({ data }) => data);
  };
};

const note = new Note();

export default note;