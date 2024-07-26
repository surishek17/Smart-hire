import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold text-primary mb-2">{note.title}</h3>
      <p className="text-gray-700 mb-4">{note.content}</p>
      <small className="text-gray-500 block mb-4">{note.timestamp}</small>
      <div className="flex justify-between">
        <button 
          onClick={() => onEdit(note)} 
          className="bg-accent text-white p-2 rounded-lg hover:bg-primary transition duration-300"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(note.id)} 
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
