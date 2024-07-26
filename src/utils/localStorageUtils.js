export const getNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  };
  
  export const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const addNote = (note) => {
    const notes = getNotes();
    notes.push(note);
    saveNotes(notes);
  };
  
  export const updateNote = (updatedNote) => {
    const notes = getNotes();
    const noteIndex = notes.findIndex(note => note.id === updatedNote.id);
    notes[noteIndex] = updatedNote;
    saveNotes(notes);
  };
  
  export const deleteNote = (id) => {
    let notes = getNotes();
    notes = notes.filter(note => note.id !== id);
    saveNotes(notes);
  };
  