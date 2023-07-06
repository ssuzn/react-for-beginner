import Info from "../components/Info";
import styles from "./Home.module.css";
import { useEffect, useInsertionEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState({});

  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDatas(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(datas);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
        ) : (
          <Info
          backgroundImageOriginal={datas.background_image_original}
          mediumCoverImg={datas.medium_cover_image}
          url={datas.url}
          titleLong={datas.title_long}
          year={datas.year}
          rating={datas.rating}
          runtime={datas.runtime}
          genres={datas.genres}
          downloadCount={datas.download_count}
          />
        )}
    </div>
  );
}

export default Detail;