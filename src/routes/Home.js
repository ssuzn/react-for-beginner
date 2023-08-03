import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // API 불러오기
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  useEffect(() => {
   getMovies()  ;
  }, []);

  return (
    <Container>
    {loading ? (
      <Loader>Loading...</Loader>
    ) : (
      <Movies>
        {movies.map((movie) => (
          <Movie 
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres}
          />
        ))}
      </Movies>
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

const Movies = styled.div`
  display: grid;
  padding: 70px;
  grid-template-columns: minmax(150px, 1fr) 1fr;
  grid-gap: 50px;
`;

export default Home;