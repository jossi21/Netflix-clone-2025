import React from "react";
import OriginalNetfliex from "./RowLists/OriginalNetfliex/OriginalNetfliex";
import requests from "../../utils/requests";

const Rows = () => {
  return (
    <>
      <OriginalNetfliex
        title="ORIGINAL NETFLIX"
        fetchurl={requests.fetchNetflixOriginals}
      />
    </>
  );
};

export default Rows;
