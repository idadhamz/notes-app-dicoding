import React from "react";

import NoteItem from "./NoteItem";

function ListNotes({ notes, deleteNotesHandler, archiveNotesHandler }) {
  const typeNotes = [
    {
      type: "active",
      status: false,
      title: "Catatan Aktif",
    },
    {
      type: "archived",
      status: true,
      title: "Arsip",
    },
  ];

  return (
    <>
      {typeNotes.map((type) => (
        <div key={type.type}>
          <h2>{type.title}</h2>
          <div className="notes-list">
            {notes.filter((note) => note.archived === type.status).length !==
            0 ? (
              notes
                .filter((note) => note.archived === type.status)
                .map((note) => {
                  return (
                    <NoteItem
                      key={note.id}
                      note={note}
                      deleteNotesHandler={deleteNotesHandler}
                      archiveNotesHandler={archiveNotesHandler}
                    />
                  );
                })
            ) : (
              <h3>Tidak Ada Catatan</h3>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default ListNotes;
