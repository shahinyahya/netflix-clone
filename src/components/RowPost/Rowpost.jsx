import "./rowpost.css";
import { imageUrl, API_KEY } from "../../constants/constants";
import axios from "../../axios";
import { useState, useEffect } from "react";
import Youtube from "react-youtube";

const Rowpost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        // console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [props.url]);

  const opts = {
    height: "350",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    // console.log(id);

    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (res.data.results.length !== 0) {
          setUrlId(res.data.results[0]);
        } else {
          alert("Requested movie Trailer ain't available!");
        }
      });
  };

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
            onClick={() => handleMovie(movie.id)}
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
};

export default Rowpost;
