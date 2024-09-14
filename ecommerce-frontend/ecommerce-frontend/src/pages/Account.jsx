import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="text-blue-500">
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
    </div>
  );
};

export default Account;
