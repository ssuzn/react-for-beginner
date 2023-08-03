import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Info({backgroundImageOriginal, mediumCoverImg, url, titleLong, year, rating, runtime, genres, downloadCount}) {
  return (
    <div>
      <Background src={backgroundImageOriginal} />
      <Show>
        <img src={mediumCoverImg} />
        <Text>
          <Title>
            <StyledLink to={url} target="_blank">{titleLong}</StyledLink>
          </Title>
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
        </Text>
      </Show>
    </div>
  )
}

Info.propTypes = {
  backgroundImageOriginal: PropTypes.string.isRequired,
  mediumCoverImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  titleLong: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  downloadCount: PropTypes.number.isRequired,
}

const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  filter: brightness(50%);
  `;

const Show = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  color: white;
  padding: 30px;
  font-weight: 600;
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 28px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: blue;
    transition: 0.7s;
  }
`;

export default Info;