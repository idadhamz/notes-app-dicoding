import React, { Component } from "react";

import { getInitialData } from "./utils";

import Header from "./components/Header";
import FormNotes from "./components/FormNotes";
import ListNotes from "./components/ListNotes";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.deleteNotesHandler = this.deleteNotesHandler.bind(this);
    this.archiveNotesHandler = this.archiveNotesHandler.bind(this);
    this.addNotesHandler = this.addNotesHandler.bind(this);
    this.searchNotesHandler = this.searchNotesHandler.bind(this);
  }

  deleteNotesHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  archiveNotesHandler(id, archived) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        if (archived) {
          note.archived = false;
        } else {
          note.archived = true;
        }
      }
      return note;
    });

    this.setState({ notes });
  }

  addNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  searchNotesHandler(keyword) {
    if (keyword) {
      const notes = this.state.notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
      });
      this.setState({ notes });
    } else {
      this.setState({ notes: getInitialData() });
    }
  }

  render() {
    const { notes } = this.state;

    return (
      <>
        <Header searchNotesHandler={this.searchNotesHandler} />
        <div className="note-app__body">
          <FormNotes addNotesHandler={this.addNotesHandler} />
          <ListNotes
            notes={notes}
            deleteNotesHandler={this.deleteNotesHandler}
            archiveNotesHandler={this.archiveNotesHandler}
          />
        </div>
      </>
    );
  }
}

export default App;
