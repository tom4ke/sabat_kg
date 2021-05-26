import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_LISTINGS, DELETE_LISTING, ADD_LISTING } from "./types";

// GET LISTINGS
export const getListings = () => (dispatch, getState) => {
  axios
    .get("/api/courses/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LISTINGS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    );
};

// DELETE LISTING
export const deleteListing = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/listings/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteListing: "Listing Deleted" }));
      dispatch({
        type: DELETE_LISTING,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LISTING
export const addListing = (listing) => (dispatch, getState) => {
  axios
    .post("/api/listings/", listing, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addListing: "Listing Added" }));
      dispatch({
        type: ADD_LISTING,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    );
};
