import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div className="s131">
        <form>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <input
                id="search"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
            <div className="input-field second-wrap">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="">CATEGORY</option>
                  <option>Subject A</option>
                  <option>Subject B</option>
                  <option>Subject C</option>
                </select>
              </div>
            </div>
            <div className="input-field third-wrap">
              <button className="btn-search" type="button">
                SEARCH
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
