import React from "react";

import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ note, deleteNotesHandler, archiveNotesHandler }) {
  return (
    <div className="note-item">
      <NoteItemContent noteContent={note} />
      <NoteItemAction
        noteContent={note}
        deleteNotesHandlerAction={deleteNotesHandler}
        archiveNotesHandlerAction={archiveNotesHandler}
      />
    </div>
  );
}

export default NoteItem;
