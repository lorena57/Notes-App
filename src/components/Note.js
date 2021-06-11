import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
  return (
    <div className="note">
      <span>My first note!</span>
      <div className="note-footer">
        <small>June 10 2021</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
