import React, { useState, useEffect } from 'react';

// NoteForm component to handle note creation and editing
const NoteForm = ({ note, onSave }) => {
  // State to manage the title and content of the note
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // useEffect to set the title and content when a note is being edited
  useEffect(() => {
    if (note) {
      setTitle(note.title);   // Set the title of the note being edited
      setContent(note.content); // Set the content of the note being edited
    } else {
      setTitle('');   // Clear the title if no note is being edited
      setContent(''); // Clear the content if no note is being edited
    }
  }, [note]); 

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Create a new note object with the current title, content, and timestamp
    const newNote = {
      id: note ? note.id : Date.now(), // Use existing note id or generate a new one
      title,
      content,
      timestamp: new Date().toLocaleString() // Add a timestamp
    };
    onSave(newNote); // Call the onSave function passed as a prop with the new note
    setTitle('');    // Clear the title input after saving
    setContent('');  // Clear the content input after saving
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 mb-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-primary font-semibold mb-2">Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="w-full p-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-primary font-semibold mb-2">Content</label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          className="w-full p-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required 
        ></textarea>
      </div>
      <button type="submit" className="bg-primary text-white p-3 rounded-lg hover:bg-secondary transition duration-300 w-full">
        {note ? 'Update Note' : 'Add Note'} // Change button text based on whether editing or adding
      </button>
    </form>
  );
};

export default NoteForm;
