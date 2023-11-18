import React from "react";
import "./Loader.scss";
const Loader: React.FC = () => {
  return (
    <div className='loader-container'>
      <div className='loader-and-text'>
        <div className='loader'></div>
        <div className='loading-text'>Loading...</div>
      </div>{" "}
    </div>
  );
};

export default Loader;
