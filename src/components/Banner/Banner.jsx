import "./banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import { useEffect, useState } from "react";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        // console.log(res.data.results[0]);
        setMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <div className="banner-title">
          <h1>{movie ? movie.title : ""}</h1>
        </div>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <div className="banner-description">
          <h2>Watch Now</h2>
          <p>{movie ? movie.overview : ""}</p>
        </div>
      </div>
      <div className="banner_dark-area"></div>
    </div>
  );
};

export default Banner;
