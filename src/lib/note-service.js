import axios from 'axios';

class Note {
  constructor() {
    this.note = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    });
  };

  getNotes() {
    return this.note.get(`/notes`)
      .then(({ data }) => data);
  };

  addNote(title,content) {
    return this.note.post(`/notes`,{title,content})
      .then(({ data }) => data);
  };

  deleteNote(id) {
    return this.note.delete(`/notes/${id}`)
    .then(({ data }) => data);
  };
};

const note = new Note();

export default note;