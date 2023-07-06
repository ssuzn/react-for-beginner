import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
  <div className={styles.container}>
    <img className={styles.img}src={coverImg} alt={title} />
    <h2 className={styles.title}>
      {/* Link : 링크 페이지로 넘어갈 때 새로고침 하지 않음 */}
      <Link to={`/movie/${id}`}>{title}</Link> 
      </h2>
    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    <ul className={styles.genres}>
      {genres.map(g => (
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;