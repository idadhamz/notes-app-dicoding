import React from "react";

function NoteItemAction({
  noteContent,
  deleteNotesHandlerAction,
  archiveNotesHandlerAction,
}) {
  return (
    <div className="note-item__action">
      <button
        className="note-item__delete-button"
        onClick={() => deleteNotesHandlerAction(noteContent.id)}
      >
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() =>
          archiveNotesHandlerAction(noteContent.id, noteContent.archived)
        }
      >
        {noteContent.archived ? "Aktifkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NoteItemAction;
