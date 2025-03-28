import React from "react";
import Row from "./Row/Row";
import requests from "../../utils/requests";

const Rows = () => {
  return (
    <div>
      <Row
        title="ORIGINAL NETFLIX"
        fetchurl={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Rows;
