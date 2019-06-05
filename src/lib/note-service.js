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

  getNote(id) {
    return this.note.get(`/notes/${id}`)
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

  updateNote(_id,title,content) {
    return this.note.put(`/notes/${_id}`,{_id,title,content})
    .then(({ data }) => data);
  };

  patchNote(id,name,value) {
    return this.note.patch(`/notes/${id}`,{id,name,value})
    .then(({ data }) => data);
  };
};

const note = new Note();

export default note;