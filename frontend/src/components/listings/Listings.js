// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getListings } from "../../actions/listings";

// export class Listings extends Component {
//   static propTypes = {
//     listings: PropTypes.array.isRequired,
//   };

//   componentDidMount() {
//     this.props.getListings();
//   }
//   render() {
//     return (
//       <div>
//         <h1>Listings list</h1>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   listings: state.listings.listings,
// });

// export default connect(mapStateToProps)(getListings);
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getListings, deleteListing } from "../../actions/listings";

export class Listings extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired,
    getListings: PropTypes.array.isRequired,
    deleteListing: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getListings();
  }
  render() {
    return (
      <Fragment>
        <section id="listings" className="py-5">
          <div className="container">
            <h3 className="text-center mb-3">Бардык жарыялар</h3>
            <div className="row">
              {this.props.listings.map((listing) => (
                <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
                  <div className="card listing-preview">
                    <img
                      className="card-img-top"
                      src={listing.photo_main}
                      alt=""
                      style={{
                        minHeight: "220px",
                        maxHeight: "220px",
                        width: "100%",
                      }}
                    />
                    <div className="card-img-overlay">
                      <h2>
                        <span className="badge badge-secondary text-white">
                          {listing.price}
                        </span>
                      </h2>
                    </div>

                    <div className="card-body">
                      <div className="listing-heading text-center">
                        <h4 className="text-primary">{listing.title}</h4>
                        <p>
                          <i className="fa fa-map-marker text-secondary"></i>{" "}
                          {listing.address}, {listing.city_title},{" "}
                          {listing.country_title}
                        </p>
                      </div>
                      <h3>
                        <a href="course-details.html">{listing.title}</a>
                      </h3>
                      <hr />
                      <div className="row py-2 text-secondary">
                        <div className="col-6">
                          <i className="fa fa-list-alt"></i>{" "}
                          {listing.category_title}
                        </div>
                        <div className="col-6">
                          <i className="fa fa-calendar"></i> Жарыяланды:{" "}
                          {listing.list_date}
                        </div>
                      </div>
                    </div>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="assets/img/trainers/trainer-1.jpg"
                          className="img-fluid"
                          alt=""
                        ></img>
                        <span>Antonio</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="fa fa-user"></i>&nbsp;50 &nbsp;&nbsp;
                        <i className="fa fa-heart"></i>&nbsp;65
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings.listings,
});

export default connect(mapStateToProps, { getListings, deleteListing })(
  Listings,
);
