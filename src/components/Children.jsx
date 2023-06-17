import React, { useEffect, useState } from "react";
import axios from "axios";
import sharingan from "../images/sharingan.png";
import Card from "./Card";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // Fetch data here
    axios
      .get("https://www.reddit.com/r/reactjs.json")
      .then((response) => {
        setMovies(response.data.data.children); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(movies);
  return (
    <div>
      <div className="header">
        <h1>ContenTerra</h1>

        <img src={sharingan} alt="" />
      </div>
      <div className="movies">
        <div className="grid-container">
          {movies.map((movie, index) => {
            return (
              <Card
                title={movie.data.title}
                selftext_html={movie.data.selftext_html}
                url={movie.data.url}
                score={movie.data.score}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MoviesList;
