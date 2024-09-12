// src/app/dispatch.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";

const Dispatch = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <>{children}</>;
};

export default Dispatch;
