import styles from "./Info.module.css";

function Info({backgroundImageOriginal, mediumCoverImg, url, titleLong, year, rating, runtime, genres, downloadCount}) {
  return (
    <div>
      <img className={styles.bg} src={backgroundImageOriginal} />
      <div className={styles.show}>
        <img src={mediumCoverImg} />
        <div className={styles.text}>
          <h1 className={styles.title}><a href={url} target="_blank">{titleLong}</a></h1>
          <ul>
            <li>Release {year}</li>
            <li>Rating {rating}</li>
            <li>Runtime {runtime}</li>
            <li>Download {downloadCount}</li>
            <li>
              Genres
              <ul>
                {genres.map(genre => <li>{genre}</li>)}
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Info;