import React from 'react'
import Row from '../Row/Row';
import requests from '../../../Utils/requests';


const Rowslist = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        islargeRow={true}
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />

      <Row title="Top Rated" fetchurl={requests.fetchTopRatedMovie} />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row
        title="Documentary Movies"
        fetchurl={requests.fetchDocumentaryMovies}
      />
      <Row title="TV Shows" fetchurl={requests.fetchTvShow} />
    </>
  );
}

export default Rowslist