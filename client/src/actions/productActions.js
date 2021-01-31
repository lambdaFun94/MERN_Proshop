import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_FAIL,
} from "../constants/productConstants.js";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getOneProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
