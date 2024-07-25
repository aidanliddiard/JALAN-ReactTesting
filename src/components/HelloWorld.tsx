import React from "react";
import { Link } from "react-router-dom";

const HelloWorld: React.FC = () => {
  return (
    <>
      <h1>Landing page placeholder</h1>
      <Link to="/movies">Go to movie list</Link>
    </>
  );
};
export default HelloWorld;
