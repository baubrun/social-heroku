import Loader from "react-loader-spinner";
import React from "react";

const Spinner = () => {
  return (
    <Loader
      type="Puff"
      color="#455a64"
      height={100}
      width={100}
    //   timeout={3000} //3 secs
    />
  );
};

export default Spinner;
