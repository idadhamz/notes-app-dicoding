import React from "react";

function NoteItemContent({ noteContent }) {
  return (
    <div className="note-item__content">
      <p className="note-item__title">{noteContent.title}</p>
      <p className="note-item__date">{noteContent.date}</p>
      <p className="note-item__body">{noteContent.body}</p>
    </div>
  );
}

export default NoteItemContent;
