import React, { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, addNote, updateNote, deleteNote } from '../utils/localStorageUtils';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleSaveNote = (note) => {
    if (editingNote) {
      updateNote(note);
      setEditingNote(null);
    } else {
      addNote(note);
    }
    setNotes(getNotes());
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
    setNotes(getNotes());
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Simple Note Taking App</h1>
        <input 
          type="text" 
          placeholder="Search notes" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="w-full p-3 mb-6 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <NoteForm note={editingNote} onSave={handleSaveNote} />
        <NoteList notes={filteredNotes} onEdit={handleEditNote} onDelete={handleDeleteNote} />
      </div>
    </div>
  );
};

export default HomePage;
