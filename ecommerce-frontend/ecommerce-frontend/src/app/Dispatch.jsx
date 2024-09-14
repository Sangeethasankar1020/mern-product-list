import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";

const Dispatch = ({ children, action, actionArgs = [] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    if (action) {
      dispatch(action(...actionArgs));
    }
  }, [dispatch, action, actionArgs]);

  return <>{children}</>;
};

export default Dispatch;
