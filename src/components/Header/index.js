import React, { Component } from "react";

import SearchBar from "./SearchBar";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSubmitSearchHandler = this.onSubmitSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    const keywordInputValue = event.target.value;

    this.setState({
      keyword: keywordInputValue,
    });
  }

  onSubmitSearchHandler(event) {
    event.preventDefault();

    this.props.searchNotesHandler(this.state.keyword);
  }

  render() {
    const { keyword } = this.state;

    return (
      <div className="note-app__header">
        <h1>Notes App</h1>
        <SearchBar
          keyword={keyword}
          onSearchHandler={this.onSearchHandler}
          onSubmitSearchHandler={this.onSubmitSearchHandler}
        />
      </div>
    );
  }
}

export default Header;
