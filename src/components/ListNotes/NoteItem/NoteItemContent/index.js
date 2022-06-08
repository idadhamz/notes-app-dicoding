import React from "react";

import { showFormattedDate } from "../../../../utils";

function NoteItemContent({ noteContent }) {
  return (
    <div className="note-item__content">
      <p className="note-item__title">{noteContent.title}</p>
      <p className="note-item__date">
        {showFormattedDate(noteContent.createdAt)}
      </p>
      <p className="note-item__body">{noteContent.body}</p>
    </div>
  );
}

export default NoteItemContent;
