import React from "react";

function FormInput({
  title,
  body,
  onTitleFormHandler,
  onBodyFormHandler,
  onSubmitFormHandler,
}) {
  return (
    <form className="note-input__body" onSubmit={onSubmitFormHandler}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={onTitleFormHandler}
        placeholder="Title"
        className="note-input__title"
      />

      <textarea
        name="body"
        id="body"
        value={body}
        onChange={onBodyFormHandler}
        placeholder="Body"
        className="note-input__body"
      />

      <button type="submit">Buat</button>
    </form>
  );
}

export default FormInput;
