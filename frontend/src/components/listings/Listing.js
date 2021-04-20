// import React, { Component } from "react";

// export class Listing extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Listing Detail Page</h1>
//       </div>
//     );
//   }
// }

// export default Listing;
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
            <h3 className="text-center mb-3">Все объявления</h3>
            <div className="row">
              {this.props.listings.map((listing) => (
                <div className="col-md-6 col-lg-4 mb-4">
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
                          <i className="fas fa-map-marker text-secondary"></i>{" "}
                          {listing.city}
                        </p>
                      </div>
                      <hr />
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
