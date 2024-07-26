import React, { useState } from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const notesPerPage = 10;
  const paginatedNotes = notes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  const totalPages = Math.ceil(notes.length / notesPerPage);

  return (
    <div>
      {paginatedNotes.map(note => (
        <NoteItem 
          key={note.id} 
          note={note} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
      <div className="flex justify-between mt-6">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-primary text-white p-3 rounded-lg hover:bg-secondary transition duration-300"
        >
          Previous
        </button>
        <span className="text-primary font-semibold">Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-primary text-white p-3 rounded-lg hover:bg-secondary transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NoteList;
