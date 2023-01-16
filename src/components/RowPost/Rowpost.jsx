import "./rowpost.css";
import { imageUrl } from "../../constants/constants";
import axios from "../../axios";
import { useState, useEffect } from "react";

const Rowpost = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        // console.log(res.data.results.length);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [props.url]);

  return (
    <div className="rowpost" key={props.key}>
      <h2 className="row-title">{props.title}</h2>

      <div className="posters">
        {movies.map((movie, id) => (
          <img
            src={`${imageUrl + movie.backdrop_path}`}
            alt="poster"
            className={props.isSmall ? "smallposter" : "poster"}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Rowpost;
