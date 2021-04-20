// import React, { Component } from "react";

// export class Form extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Add Listing Form</h1>
//       </div>
//     );
//   }
// }

// export default Form;
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addListing } from "../../actions/listings";

export class Form extends Component {
  state = {
    title: "",
    price: "",
    // photo_main: "",
    // photo_1: "",
  };

  static propTypes = {
    addListing: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onImageChange = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    this.setState({ photo_main: file });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, price, photo_main, photo_1 } = this.state;
    const listing = {
      title,
      price,
      // photo_main,
      // photo_1,
    };
    this.props.addListing(listing);
    this.setState({
      title: "",
      price: "",
      // photo_main: "",
      // photo_1: "",
    });
    this.props.history.push("/");
  };
  render() {
    const { title, price, photo_main, photo_1 } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Listing Form</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>
          {/* <div className="form-group">
            <label>Main photo</label>
            <input
              className="form-control"
              type="file"
              name="photo_main"
              onChange={this.onImageChange}
              value={photo_main}
              multiple
            />
          </div>
          <div className="form-group">
            <label>Photo 1</label>
            <input
              className="form-control"
              type="file"
              name="photo_1"
              onChange={this.onImageChange}
              value={photo_1}
            />
          </div> */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addListing })(Form);
