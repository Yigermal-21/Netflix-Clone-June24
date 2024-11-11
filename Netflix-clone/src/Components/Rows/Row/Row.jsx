import React, { useEffect, useState } from "react";
import './row.css'
import axios from "../../../Utils/axios";
import movieTrailer from 'movie-trailer' 
// Optional: If you plan to use YouTube for trailers
import YouTube from 'react-youtube';

const Row = ({ title, fetchurl, islargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerurl, setTrailerurl] = useState(""); // Add state for trailer URL
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // Fetch movies when the fetchurl changes
    const fetchMovies = async () => {
      try {
        // console.log(fetchurl);
        // console.log(title);
        const request = await axios.get(fetchurl);
        // console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [fetchurl]);

  // Handle click on movie poster to show trailer
  const handleclick = (movie) => {
    if (trailerurl) {
      setTrailerurl(""); // Close trailer if already open
    } else {
      // Add your movie trailer logic here (e.g., using movieTrailer function)
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
            // console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
        //   console.log(urlParams);
        //   console.log(urlParams.get("v"));
          setTrailerurl(urlParams.get("v")); // Set trailer URL
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleclick(movie)}
            key={index}
            src={`${base_url}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${islargeRow ? "row_posterLarge" : ""}`}
          />
        ))}
      </div>

      {/* Show trailer if URL exists */}
      <div style={{ padding: "40px" }}>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
