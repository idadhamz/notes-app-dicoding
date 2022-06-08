import React, { Component } from "react";

export class FormNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxTitleLength: 50,
      title: "",
      body: "",
    };

    this.onTitleFormHandler = this.onTitleFormHandler.bind(this);
    this.onBodyFormHandler = this.onBodyFormHandler.bind(this);
    this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
  }

  onTitleFormHandler(event) {
    const maxLength = 50;
    const titleInputValue = event.target.value.slice(0, maxLength);
    const titleInputValueLength = titleInputValue.length;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: titleInputValue,
        maxTitleLength: maxLength - titleInputValueLength,
      };
    });
  }

  onBodyFormHandler(event) {
    const bodyInputValue = event.target.value;

    this.setState((prevState) => {
      return {
        ...prevState,
        body: bodyInputValue,
      };
    });
  }

  onSubmitFormHandler(event) {
    event.preventDefault();

    const { title, body } = this.state;
    this.props.addNotesHandler({ title, body });

    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const { maxTitleLength, title, body } = this.state;

    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter : {maxTitleLength}
        </p>
        <form className="note-input__body" onSubmit={this.onSubmitFormHandler}>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.onTitleFormHandler}
            placeholder="Title"
            className="note-input__title"
          />

          <textarea
            name="body"
            id="body"
            value={body}
            onChange={this.onBodyFormHandler}
            placeholder="Body"
            className="note-input__body"
          />

          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default FormNotes;
