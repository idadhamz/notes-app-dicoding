import React, { Component } from "react";

import FormInput from "./FormInput";

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
      maxTitleLength: 50,
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
        <FormInput
          title={title}
          body={body}
          onTitleFormHandler={this.onTitleFormHandler}
          onBodyFormHandler={this.onBodyFormHandler}
          onSubmitFormHandler={this.onSubmitFormHandler}
        />
      </div>
    );
  }
}

export default FormNotes;
