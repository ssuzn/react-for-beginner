import Info from "../components/Info";
import styled from "styled-components";
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
    <Container>
      {loading ? (
        <Loader>Loading...</Loader>
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
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  justify-content: center;
  margin: 50px;
`;

const Loader = styled.h1`
  width: 100%;
  height: 100vh;
  font-weight: 300;
  align-items: center;
`;
export default Detail;